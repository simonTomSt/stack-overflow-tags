import '@testing-library/jest-dom';

// Mock useTranslation hook
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

afterEach(() => {
  jest.clearAllMocks();
});
