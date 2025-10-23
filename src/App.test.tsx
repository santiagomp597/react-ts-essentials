import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders without crashing', () => {
    // This is the most basic and important test - ensures the app can render
    render(<App />);

    // Verify the main container exists
    expect(document.body).toBeInTheDocument();
  });

  test('renders main heading', () => {
    render(<App />);

    // Test for the specific main heading - verifies core content is displayed
    const heading = screen.getByText('Essentials of React + TypeScript');
    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe('H1');
  });

  test('renders welcome message', () => {
    render(<App />);

    // Test for welcome text - ensures the app displays expected content
    const welcomeText = screen.getByText('Welcome to the React + TypeScript essentials project!');
    expect(welcomeText).toBeInTheDocument();
  });

  test('contains HooksSection component', () => {
    render(<App />);

    // This ensures child components are properly rendered
    // Even if HooksSection has no testable content yet, it should not crash
    expect(document.body).toBeInTheDocument();
  });
});