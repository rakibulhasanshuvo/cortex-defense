import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { NewsletterForm } from './NewsletterForm';

describe('NewsletterForm', () => {
    it('shows success status for valid email', async () => {
        render(<NewsletterForm />);
        const input = screen.getByPlaceholderText('EMAIL ADDRESS');
        const button = screen.getByRole('button');

        fireEvent.change(input, { target: { value: 'test@example.com' } });
        fireEvent.click(button);

        expect(screen.getByTestId('loading-icon')).toBeInTheDocument();

        await waitFor(() => {
            expect(screen.getByText('PROTOCOL SUBSCRIPTION CONFIRMED')).toBeInTheDocument();
        }, { timeout: 3000 });
    });

    it('shows error status for invalid email', async () => {
        render(<NewsletterForm />);
        const input = screen.getByPlaceholderText('EMAIL ADDRESS');
        const button = screen.getByRole('button');

        fireEvent.change(input, { target: { value: 'invalid-email' } });
        fireEvent.click(button);

        await waitFor(() => {
            expect(screen.getByText('ENCRYPTION ERROR: INVALID ADDRESS')).toBeInTheDocument();
        }, { timeout: 3000 });
    });
});
