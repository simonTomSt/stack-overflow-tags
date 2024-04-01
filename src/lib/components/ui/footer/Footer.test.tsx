import { render, screen, fireEvent } from '@testing-library/react';
import { Footer } from './Footer';

const mockChangeLanguage = jest.fn();

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    i18n: {
      changeLanguage: mockChangeLanguage,
      language: 'en',
    },
    t: (key: string) => key,
  }),
}));

describe('Footer', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it('renders language select and social media icons', () => {
    screen.getByTestId('lang-select');
    expect(screen.getByLabelText('GitHub')).toBeInTheDocument();
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument();
  });

  it('changes language when select is changed', () => {
    const select = screen.getByTestId('lang-select');

    fireEvent.change(select, { target: { value: 'pl' } });
    expect(mockChangeLanguage).toHaveBeenCalledWith('pl');
  });
});
