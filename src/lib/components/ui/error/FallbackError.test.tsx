import { render, screen, fireEvent } from '@testing-library/react';
import { FallbackError } from './FallbackError';

describe('FallbackError', () => {
  const mockOnTryAgain = jest.fn();

  beforeEach(() => {
    render(<FallbackError onTryAgain={mockOnTryAgain} />);
  });

  it('Renders with error text and try again button', () => {
    expect(screen.getByText('error_ocurred')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'try_again' })
    ).toBeInTheDocument();
  });

  it('calls onTryAgain prop when button is clicked', () => {
    fireEvent.click(screen.getByRole('button', { name: 'try_again' }));
    expect(mockOnTryAgain).toHaveBeenCalledTimes(1);
  });
});
