// Pure TypeScript QR Code Matrix Generator (ISO/IEC 18004 compliant subset for Versions 1-6)

export type QRErrorCorrectionLevel = 'L' | 'M' | 'Q' | 'H';

// Reed-Solomon Galois Field GF(256) arithmetic
const EXP_TABLE = new Uint8Array(256);
const LOG_TABLE = new Uint8Array(256);
let val = 1;
for (let i = 0; i < 255; i++) {
  EXP_TABLE[i] = val;
  LOG_TABLE[val] = i;
  val = (val << 1) ^ (val >= 128 ? 0x11d : 0);
}
EXP_TABLE[255] = EXP_TABLE[0];

function gmul(a: number, b: number): number {
  if (a === 0 || b === 0) return 0;
  return EXP_TABLE[(LOG_TABLE[a] + LOG_TABLE[b]) % 255];
}

function polyMul(p1: number[], p2: number[]): number[] {
  const result = new Array(p1.length + p2.length - 1).fill(0);
  for (let i = 0; i < p1.length; i++) {
    for (let j = 0; j < p2.length; j++) {
      result[i + j] ^= gmul(p1[i], p2[j]);
    }
  }
  return result;
}

function getGeneratorPoly(degree: number): number[] {
  let g = [1];
  for (let i = 0; i < degree; i++) {
    g = polyMul(g, [1, EXP_TABLE[i]]);
  }
  return g;
}

function calculateErrorCorrection(data: number[], ecCount: number): number[] {
  const genPoly = getGeneratorPoly(ecCount);
  const msgPoly = new Array(data.length + ecCount).fill(0);
  for (let i = 0; i < data.length; i++) msgPoly[i] = data[i];

  for (let i = 0; i < data.length; i++) {
    const lead = msgPoly[i];
    if (lead !== 0) {
      for (let j = 0; j < genPoly.length; j++) {
        msgPoly[i + j] ^= gmul(genPoly[j], lead);
      }
    }
  }
  return msgPoly.slice(data.length);
}

// Version table definitions (Capacity in bytes for Byte Mode & EC code count)
interface VersionConfig {
  version: number;
  dataCapacity: Record<QRErrorCorrectionLevel, number>;
  ecWords: Record<QRErrorCorrectionLevel, number>;
  alignmentPatterns: number[];
}

const VERSION_CONFIGS: VersionConfig[] = [
  {
    version: 1,
    dataCapacity: { L: 19, M: 16, Q: 13, H: 9 },
    ecWords: { L: 7, M: 10, Q: 13, H: 17 },
    alignmentPatterns: [],
  },
  {
    version: 2,
    dataCapacity: { L: 34, M: 28, Q: 22, H: 16 },
    ecWords: { L: 10, M: 16, Q: 22, H: 28 },
    alignmentPatterns: [6, 18],
  },
  {
    version: 3,
    dataCapacity: { L: 55, M: 44, Q: 34, H: 26 },
    ecWords: { L: 15, M: 26, Q: 18, H: 22 },
    alignmentPatterns: [6, 22],
  },
  {
    version: 4,
    dataCapacity: { L: 80, M: 64, Q: 48, H: 36 },
    ecWords: { L: 20, M: 18, Q: 26, H: 16 },
    alignmentPatterns: [6, 26],
  },
  {
    version: 5,
    dataCapacity: { L: 108, M: 86, Q: 62, H: 46 },
    ecWords: { L: 26, M: 24, Q: 18, H: 22 },
    alignmentPatterns: [6, 30],
  },
  {
    version: 6,
    dataCapacity: { L: 136, M: 108, Q: 76, H: 60 },
    ecWords: { L: 18, M: 16, Q: 24, H: 28 },
    alignmentPatterns: [6, 34],
  },
];

// Format info bits for Mask Pattern 0: (row + col) % 2 === 0
const FORMAT_INFO: Record<QRErrorCorrectionLevel, number> = {
  L: 0x77c4, // 010001000100100 ^ 101010000010010
  M: 0x5412,
  Q: 0x355f,
  H: 0x1689,
};

export function generateQRMatrix(
  text: string,
  level: QRErrorCorrectionLevel = 'M'
): boolean[][] {
  const utf8Bytes: number[] = [];
  for (let i = 0; i < text.length; i++) {
    const code = text.charCodeAt(i);
    if (code < 128) {
      utf8Bytes.push(code);
    } else if (code < 2048) {
      utf8Bytes.push(192 | (code >> 6), 128 | (code & 63));
    } else {
      utf8Bytes.push(224 | (code >> 12), 128 | ((code >> 6) & 63), 128 | (code & 63));
    }
  }

  // Pick smallest sufficient QR Version
  let chosenConfig = VERSION_CONFIGS[0];
  for (const cfg of VERSION_CONFIGS) {
    if (cfg.dataCapacity[level] >= utf8Bytes.length) {
      chosenConfig = cfg;
      break;
    }
    chosenConfig = cfg;
  }

  const capacity = chosenConfig.dataCapacity[level];
  const ecWords = chosenConfig.ecWords[level];
  const version = chosenConfig.version;
  const size = 17 + version * 4;

  // 1. Bit Buffer: Mode (0100 for Byte) + Char Count (8 bits) + Data Bytes
  const bits: number[] = [0, 1, 0, 0];
  for (let i = 7; i >= 0; i--) bits.push((utf8Bytes.length >> i) & 1);
  for (const b of utf8Bytes) {
    for (let i = 7; i >= 0; i--) bits.push((b >> i) & 1);
  }

  // Terminator (up to 4 zeroes)
  const totalDataBits = capacity * 8;
  const termLen = Math.min(4, totalDataBits - bits.length);
  for (let i = 0; i < termLen; i++) bits.push(0);

  // Align to 8-bit boundary
  while (bits.length % 8 !== 0) bits.push(0);

  // Convert to bytes & add alternating pad bytes
  const dataBytes: number[] = [];
  for (let i = 0; i < bits.length; i += 8) {
    let byteVal = 0;
    for (let j = 0; j < 8; j++) byteVal = (byteVal << 1) | bits[i + j];
    dataBytes.push(byteVal);
  }

  const padBytes = [0xec, 0x11];
  let padIdx = 0;
  while (dataBytes.length < capacity) {
    dataBytes.push(padBytes[padIdx % 2]);
    padIdx++;
  }

  // Error Correction Words
  const ecBytes = calculateErrorCorrection(dataBytes, ecWords);
  const finalStream = [...dataBytes, ...ecBytes];

  // Convert back to complete bit sequence
  const finalBits: number[] = [];
  for (const b of finalStream) {
    for (let i = 7; i >= 0; i--) finalBits.push((b >> i) & 1);
  }

  // 2. Build Matrix
  const matrix: (boolean | null)[][] = Array.from({ length: size }, () =>
    new Array(size).fill(null)
  );

  // Helper: draw finder pattern
  const setFinder = (startX: number, startY: number) => {
    for (let dy = -1; dy <= 7; dy++) {
      for (let dx = -1; dx <= 7; dx++) {
        const x = startX + dx;
        const y = startY + dy;
        if (x < 0 || x >= size || y < 0 || y >= size) continue;
        if (dx === -1 || dx === 7 || dy === -1 || dy === 7) {
          matrix[y][x] = false; // white separator
        } else if (dx === 0 || dx === 6 || dy === 0 || dy === 6) {
          matrix[y][x] = true; // black outer
        } else if (dx >= 2 && dx <= 4 && dy >= 2 && dy <= 4) {
          matrix[y][x] = true; // black inner
        } else {
          matrix[y][x] = false; // white ring
        }
      }
    }
  };

  setFinder(0, 0);
  setFinder(size - 7, 0);
  setFinder(0, size - 7);

  // Timing patterns
  for (let i = 8; i < size - 8; i++) {
    const valBool = i % 2 === 0;
    if (matrix[6][i] === null) matrix[6][i] = valBool;
    if (matrix[i][6] === null) matrix[i][6] = valBool;
  }

  // Alignment pattern (if version >= 2)
  if (chosenConfig.alignmentPatterns.length > 0) {
    const ap = chosenConfig.alignmentPatterns;
    for (const r of ap) {
      for (const c of ap) {
        if (matrix[r][c] !== null) continue;
        for (let dy = -2; dy <= 2; dy++) {
          for (let dx = -2; dx <= 2; dx++) {
            const isBorder = Math.abs(dx) === 2 || Math.abs(dy) === 2;
            const isCenter = dx === 0 && dy === 0;
            matrix[r + dy][c + dx] = isBorder || isCenter;
          }
        }
      }
    }
  }

  // Dark module
  matrix[size - 8][8] = true;

  // Format info area reservation
  const fmt = FORMAT_INFO[level];
  const fmtBits: boolean[] = [];
  for (let i = 14; i >= 0; i--) fmtBits.push(((fmt >> i) & 1) === 1);

  // Top-left format placement
  const tlCoords = [
    [8, 0], [8, 1], [8, 2], [8, 3], [8, 4], [8, 5], [8, 7], [8, 8],
    [7, 8], [5, 8], [4, 8], [3, 8], [2, 8], [1, 8], [0, 8],
  ];
  for (let i = 0; i < 15; i++) {
    matrix[tlCoords[i][0]][tlCoords[i][1]] = fmtBits[i];
  }

  // Split format placement across bottom-left and top-right
  for (let i = 0; i < 7; i++) matrix[size - 1 - i][8] = fmtBits[i];
  for (let i = 0; i < 8; i++) matrix[8][size - 8 + i] = fmtBits[7 + i];

  // 3. Place Data Bits in zigzag order skipping occupied modules
  let bitIdx = 0;
  let upwards = true;

  for (let rightCol = size - 1; rightCol > 0; rightCol -= 2) {
    if (rightCol === 6) rightCol--; // Skip vertical timing column

    const rowIndices = upwards
      ? Array.from({ length: size }, (_, i) => size - 1 - i)
      : Array.from({ length: size }, (_, i) => i);

    for (const row of rowIndices) {
      for (let c = 0; c < 2; c++) {
        const col = rightCol - c;
        if (matrix[row][col] === null) {
          const bit = bitIdx < finalBits.length ? finalBits[bitIdx++] : 0;
          // Apply mask 0: (row + col) % 2 === 0
          const mask = (row + col) % 2 === 0;
          matrix[row][col] = (bit ^ (mask ? 1 : 0)) === 1;
        }
      }
    }
    upwards = !upwards;
  }

  return matrix.map((row) => row.map((cell) => cell ?? false));
}
