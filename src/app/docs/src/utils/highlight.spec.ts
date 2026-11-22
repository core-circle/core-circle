import { highlightCode } from './highlight';

describe('highlightCode Utility', () => {
  it('returns empty string when input is falsy', () => {
    expect(highlightCode('')).toBe('');
  });

  it('escapes HTML special entities', () => {
    const result = highlightCode('& < >');
    expect(result).toContain('&amp;');
    expect(result).toContain('&lt;');
    expect(result).toContain('&gt;');
  });

  it('highlights JSX component tags with primary token class', () => {
    const result = highlightCode('<Button>Click</Button>');
    expect(result).toContain('<span class="text-core-circle-primary">Button</span>');
  });

  it('highlights prop names with warning token class', () => {
    const result = highlightCode('<Button variant="solid" />');
    expect(result).toContain('<span class="text-core-circle-warning">variant</span>');
  });

  it('highlights string literals and punctuation correctly', () => {
    const result = highlightCode('{ label: "Primary Action" }');
    expect(result).toContain('<span class="text-green-400">"Primary Action"</span>');
    expect(result).toContain('<span class="text-core-circle-secondary">label</span>');
  });
});
