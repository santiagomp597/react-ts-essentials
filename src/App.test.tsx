import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import App from './App';

describe('App Component', () => {
  test('renders without crashing', () => {
    // This is the most basic and important test - ensures the app can render
    render(
      <MemoryRouter initialEntries={['/typescript']}>
        <App />
      </MemoryRouter>
    );

    // Verify the main container exists
    expect(document.body).toBeInTheDocument();
  });

  test('renders TypeScript page by default', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    // Test for the TypeScript essentials heading since that's the default route
    const heading = screen.getByText('TypeScript Essentials');
    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe('H2');
  });

  test('renders React page when navigated to react route', () => {
    render(
      <MemoryRouter initialEntries={['/react']}>
        <App />
      </MemoryRouter>
    );

    // Test for React essentials heading
    const heading = screen.getByText('React Essentials');
    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe('H2');
  });

  test('contains navigation header', () => {
    render(
      <MemoryRouter initialEntries={['/typescript']}>
        <App />
      </MemoryRouter>
    );

    // Test that navigation links are present (there are multiple due to mobile/desktop versions)
    const typescriptLinks = screen.getAllByText('TypeScript');
    const reactLinks = screen.getAllByText('React');

    expect(typescriptLinks.length).toBeGreaterThan(0);
    expect(reactLinks.length).toBeGreaterThan(0);
  });
});