import { render, screen } from '@testing-library/react';
import { SigninForm } from '../../../components/forms/signin/SigninForm';

describe('SigninForm', () => {
  test('renders all form fields and texts', () => {
    render(<SigninForm />);

    // Labels
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();

    // Button
    expect(
      screen.getByRole('button', { name: /sign in/i })
    ).toBeInTheDocument();

    // Footer link
    expect(screen.getByText(/don't have an account\?/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /sign up/i })).toHaveAttribute(
      'href',
      '/auth/signup'
    );
  });
});
