
module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/mocks/**'
  ],
  coveragePathIgnorePatterns: [],
  testEnvironment: 'jsdom',
  modulePaths: ['<rootDir>/src'],
  transform: {
    '^.+\\.(ts|js|tsx|jsx)$': '@swc/jest'
  },
  transformIgnorePatterns: [
    'node_modules/(?!(@terradharitri/sdk-guardians-provider|@terradharitri/sdk-dapp-form|@terradharitri/sdk-dapp-nft|@terradharitri/sdk-dapp|@terradharitri/sdk-wallet-connect-provider|@terradharitri/sdk-wallet|react-redux|swiper|ssr-window|dom7|axios|react-tooltip|uuid|uint8arrays|multiformats|@lifeomic/axios-fetch|@walletconnect|@noble/ed25519)/)'
  ],
  
  moduleNameMapper: {
    '^react-native$': 'react-native-web',
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    '^@terradharitri/sdk-dapp/(.*)$': '<rootDir>/node_modules/@terradharitri/sdk-dapp/$1',
    '^types/(.*)$': '<rootDir>/src/types/$1',
    '^constants/(.*)$': '<rootDir>/node_modules/@terradharitri/sdk-dapp/src/constants/$1'


  },
  
  setupFilesAfterEnv: ['./src/setupTests.ts'],
  moduleFileExtensions: [
    // Place tsx and ts to beginning as suggestion from Jest team
    // https://jestjs.io/docs/configuration#modulefileextensions-arraystring
    'tsx',
    'ts',
    'web.js',
    'js',
    'web.ts',
    'web.tsx',
    'json',
    'web.jsx',
    'jsx',
    'node'
  ],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ],
  clearMocks: true,
  resetMocks: true,
  restoreMocks: true
};
