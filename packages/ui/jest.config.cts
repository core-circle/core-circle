module.exports = {
  displayName: '@core-circle/ui',
  preset: '../../jest.preset.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nx/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nx/react/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: {
    '^@core-circle/icons$': '<rootDir>/../../packages/icons/index.ts',
    '^@core-circle/theme$': '<rootDir>/../../packages/theme/index.ts',
  },
  coveragePathIgnorePatterns: [
    '/node_modules/',
    'packages/icons/',
    'packages/theme/',
    '\\.stories\\.',
    '/interface/',
  ],
  coverageDirectory: 'test-output/jest/coverage',
  coverageReporters: ['text', 'lcov', 'html', 'json-summary'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
