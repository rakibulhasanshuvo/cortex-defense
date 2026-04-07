import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { NewsletterForm } from './NewsletterForm';

// Mock lucide-react icons
jest.mock('lucide-react', () => ({
  ArrowRight: () => <div data-testid="arrow-right-icon" />,
  Check: () => <div data-testid="check-icon" />,
  Loader2: () => <div data-testid="loader-icon" />,
  AlertCircle: () => <div data-testid="error-icon" />,
}));

describe('NewsletterForm', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('renders correctly in initial state', () => {
    render(<NewsletterForm />);

    const input = screen.getByPlaceholderText('EMAIL ADDRESS');
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue('');

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(screen.getByTestId('arrow-right-icon')).toBeInTheDocument();
  });

  it('updates email state on input change', () => {
    render(<NewsletterForm />);
    const input = screen.getByPlaceholderText('EMAIL ADDRESS') as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'test@example.com' } });
    expect(input.value).toBe('test@example.com');
  });

  it('handles successful submission', async () => {
    render(<NewsletterForm />);
    const input = screen.getByPlaceholderText('EMAIL ADDRESS');
    const button = screen.getByRole('button');

    fireEvent.change(input, { target: { value: 'test@example.com' } });
    fireEvent.click(button);

    // Should be in loading state
    expect(screen.getByTestId('loader-icon')).toBeInTheDocument();
    expect(input).toBeDisabled();
    expect(button).toBeDisabled();

    // Advance time for simulated API call (2000ms)
    await act(async () => {
      jest.advanceTimersByTime(2000);
    });

    // Should show success state
    expect(screen.getByTestId('check-icon')).toBeInTheDocument();
    expect(screen.getByText(/PROTOCOL SUBSCRIPTION CONFIRMED/i)).toBeInTheDocument();
    expect(input).toHaveValue('');

    // Advance time for status reset (5000ms)
    await act(async () => {
      jest.advanceTimersByTime(5000);
    });

    // Should return to idle state
    expect(screen.getByTestId('arrow-right-icon')).toBeInTheDocument();
    expect(screen.queryByText(/PROTOCOL SUBSCRIPTION CONFIRMED/i)).not.toBeInTheDocument();
  });

  it('handles error submission', async () => {
    render(<NewsletterForm />);
    const input = screen.getByPlaceholderText('EMAIL ADDRESS');
    const button = screen.getByRole('button');

    fireEvent.change(input, { target: { value: 'error@test.com' } });
    fireEvent.click(button);

    // Advance time for simulated API call
    await act(async () => {
      jest.advanceTimersByTime(2000);
    });

    // Should show error state
    expect(screen.getByTestId('error-icon')).toBeInTheDocument();
    expect(screen.getByText(/ENCRYPTION ERROR: INVALID ADDRESS/i)).toBeInTheDocument();
    // Input should NOT be cleared in error state
    expect(input).toHaveValue('error@test.com');
    expect(input).not.toBeDisabled();

    // Advance time for status reset
    await act(async () => {
      jest.advanceTimersByTime(5000);
    });

    // Should return to idle state
    expect(screen.queryByText(/ENCRYPTION ERROR: INVALID ADDRESS/i)).not.toBeInTheDocument();
  });

  it('does not submit if email is empty', () => {
    render(<NewsletterForm />);
    const button = screen.getByRole('button');

    fireEvent.click(button);

    // Should NOT be in loading state
    expect(screen.queryByTestId('loader-icon')).not.toBeInTheDocument();
    expect(screen.getByTestId('arrow-right-icon')).toBeInTheDocument();
  });
});
