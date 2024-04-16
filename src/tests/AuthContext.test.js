import { render, screen } from '@testing-library/react';
import { AuthProvider, useAuth } from '../contexts/AuthContext';

// Mock hook if needed
// jest.mock('./useAuth');

describe('AuthProvider', () => {
  it('renders children when user is logged in', () => {
    useAuth.mockReturnValue({ user: { name: 'Test User' } });

    render(
      <AuthProvider>
        <div>Test Child Component</div>
      </AuthProvider>
    );

    expect(screen.getByText('Test Child Component')).toBeInTheDocument();
  });

  it('does not render children when user is not logged in', () => {
    useAuth.mockReturnValue({ user: null });

    render(
      <AuthProvider>
        <div>Test Child Component</div>
      </AuthProvider>
    );

    expect(screen.queryByText('Test Child Component')).not.toBeInTheDocument();
  });
});
