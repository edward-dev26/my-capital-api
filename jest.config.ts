export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '@exmpl/(.*)': '<rootDir>/src/$1',
  },
  coveragePathIgnorePatterns: ['/node_modules/'],
  setupFilesAfterEnv: ['./jest.setup.ts'],
};
