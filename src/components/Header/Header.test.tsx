// ===================================================================
// COMPREHENSIVE JEST TESTING SHOWCASE
// ===================================================================
// This file demonstrates essential Jest features every developer should know
// when testing React components with Testing Library

import { render, fireEvent, screen, waitFor, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Header from './Header';

// TypeScript declarations for Jest DOM matchers
declare global {
  namespace jest {
    interface Matchers<R> {
      toBeInTheDocument(): R;
      toHaveClass(className: string): R;
      toBeVisible(): R;
      toHaveAttribute(attr: string, value?: string): R;
    }
  }
}

// ===================================================================
// 1. DESCRIBE BLOCKS - Organizing Tests
// ===================================================================
// 'describe' creates a test suite - a group of related tests
// It helps organize tests and provides context for what's being tested
describe('Header Component', () => {

  // ===================================================================
  // 2. SETUP AND TEARDOWN - beforeEach, afterEach, beforeAll, afterAll
  // ===================================================================

  // beforeEach runs before EACH individual test
  // Perfect for resetting state or setting up fresh test data
  beforeEach(() => {
    // Reset any global state, clear localStorage, etc.
    console.log('🧪 Running before each test...');
    // Example: localStorage.clear();
  });

  // afterEach runs after EACH individual test
  // Good for cleanup to prevent test pollution
  afterEach(() => {
    console.log('🧹 Cleaning up after test...');
    cleanup(); // React Testing Library cleanup (usually automatic)
  });

  // beforeAll runs ONCE before all tests in this describe block
  beforeAll(() => {
    console.log('🚀 Setting up test suite...');
    // Example: Start test database, set up global mocks
  });

  // afterAll runs ONCE after all tests in this describe block
  afterAll(() => {
    console.log('🏁 Tearing down test suite...');
    // Example: Close database connections, clean up global resources
  });

  // ===================================================================
  // 3. BASIC TEST STRUCTURE - test() and it()
  // ===================================================================

  // 'test' and 'it' are identical - use whichever reads better
  // Follow the AAA pattern: Arrange, Act, Assert
  test('mobile menu button is present', () => {
    // ARRANGE: Set up the test environment
    const { getByTestId } = render(<Header />);

    // ACT: Perform the action being tested
    const mobileMenuButton = getByTestId('mobile-menu-button');

    // ASSERT: Verify the expected outcome
    expect(mobileMenuButton).toBeInTheDocument();
  });

  // ===================================================================
  // 4. DIFFERENT QUERY METHODS - getBy, queryBy, findBy
  // ===================================================================

  it('demonstrates different query methods', () => {
    render(<Header />);

    // getBy* - Throws error if element not found (use when element MUST exist)
    const button1 = screen.getByTestId('mobile-menu-button');
    expect(button1).toBeInTheDocument();

    // queryBy* - Returns null if element not found (use when element might not exist)
    const nonExistentElement = screen.queryByTestId('non-existent-element');
    expect(nonExistentElement).toBeNull();

    // getByRole - Query by accessibility role (recommended approach)
    const menuButton = screen.getByRole('button', { name: /toggle mobile menu/i });
    expect(menuButton).toBeInTheDocument();

    // getByText - Query by visible text content
    const menuText = screen.getByText('Menu');
    expect(menuText).toBeInTheDocument();
  });

  // ===================================================================
  // 5. ASYNC TESTING - findBy queries and waitFor
  // ===================================================================

  it('demonstrates async testing patterns', async () => {
    render(<Header />);

    // findBy* - Returns a promise, waits for element to appear (up to 1000ms by default)
    // Use when elements appear after async operations
    const asyncElement = await screen.findByTestId('mobile-menu-button');
    expect(asyncElement).toBeInTheDocument();

    // waitFor - Wait for any async operation to complete
    await waitFor(() => {
      expect(screen.getByTestId('mobile-menu-button')).toBeInTheDocument();
    });

    // waitFor with custom timeout and interval
    await waitFor(
      () => {
        expect(screen.getByTestId('mobile-menu-button')).toBeInTheDocument();
      },
      {
        timeout: 3000,    // Wait up to 3 seconds
        interval: 100,    // Check every 100ms
      }
    );
  });

  // ===================================================================
  // 6. USER INTERACTIONS - fireEvent vs userEvent
  // ===================================================================

  test('mobile menu opens on button click - fireEvent approach', () => {
    const { getByTestId, container } = render(<Header />);
    const mobileMenuButton = getByTestId('mobile-menu-button');

    // fireEvent - Directly dispatches DOM events (lower level)
    // Good for simple interactions, faster execution
    fireEvent.click(mobileMenuButton);

    const mobileSidebar = container.querySelector('.mobile-sidebar');
    expect(mobileSidebar).toHaveClass('sidebar-open');
  });

  test('mobile menu opens on button click - userEvent approach', async () => {
    // userEvent - Simulates real user interactions (higher level, more realistic)
    // Includes focus, hover, keyboard navigation, etc.
    const user = userEvent.setup();

    const { getByTestId, container } = render(<Header />);
    const mobileMenuButton = getByTestId('mobile-menu-button');

    // userEvent methods are async and return promises
    await user.click(mobileMenuButton);

    const mobileSidebar = container.querySelector('.mobile-sidebar');
    expect(mobileSidebar).toHaveClass('sidebar-open');
  });

  // ===================================================================
  // 7. KEYBOARD INTERACTIONS
  // ===================================================================

  test('mobile menu closes with Escape key', async () => {
    const user = userEvent.setup();
    const { getByTestId, container } = render(<Header />);

    // First open the menu
    const mobileMenuButton = getByTestId('mobile-menu-button');
    await user.click(mobileMenuButton);

    // Verify menu is open
    const mobileSidebar = container.querySelector('.mobile-sidebar');
    expect(mobileSidebar).toHaveClass('sidebar-open');

    // Press Escape key
    await user.keyboard('{Escape}');

    // Verify menu is closed
    expect(mobileSidebar).toHaveClass('sidebar-closed');
  });

  // ===================================================================
  // 8. JEST MATCHERS - Custom and Built-in
  // ===================================================================

  test('demonstrates various Jest matchers', () => {
    const { container } = render(<Header />);

    // Basic equality matchers
    expect(2 + 2).toBe(4);                    // Exact equality (Object.is)
    expect({ name: 'test' }).toEqual({ name: 'test' }); // Deep equality

    // Truthiness matchers
    expect(true).toBeTruthy();
    expect(false).toBeFalsy();
    expect(null).toBeNull();
    expect(undefined).toBeUndefined();
    expect('Hello').toBeDefined();

    // Number matchers
    expect(3.14).toBeCloseTo(3.1, 1);
    expect(10).toBeGreaterThan(5);
    expect(5).toBeLessThanOrEqual(10);

    // String matchers
    expect('Hello World').toMatch(/World/);
    expect('Hello World').toContain('World');

    // Array matchers
    expect(['apple', 'banana', 'orange']).toContain('banana');
    expect(['apple', 'banana']).toHaveLength(2);

    // DOM-specific matchers (from @testing-library/jest-dom)
    const button = container.querySelector('[data-testid="mobile-menu-button"]');
    expect(button).toBeInTheDocument();
    expect(button).toBeVisible();
    expect(button).toHaveAttribute('aria-label', 'Toggle mobile menu');
  });

  // ===================================================================
  // 9. EXCEPTION TESTING
  // ===================================================================

  test('demonstrates exception testing', () => {
    // Test that a function throws an error
    const throwError = () => {
      throw new Error('Something went wrong!');
    };

    expect(throwError).toThrow();
    expect(throwError).toThrow('Something went wrong!');
    expect(throwError).toThrow(/wrong/);
  });

  // ===================================================================
  // 10. MOCKING - Functions, Modules, and Timers
  // ===================================================================

  test('demonstrates function mocking', () => {
    // Create a mock function
    const mockCallback = jest.fn();

    // Mock implementation
    const mockAdd = jest.fn((a, b) => a + b);

    // Call the mocks
    mockCallback('test');
    const result = mockAdd(2, 3);

    // Assert on mock behavior
    expect(mockCallback).toHaveBeenCalled();
    expect(mockCallback).toHaveBeenCalledWith('test');
    expect(mockCallback).toHaveBeenCalledTimes(1);

    expect(mockAdd).toHaveBeenCalledWith(2, 3);
    expect(result).toBe(5);
  });

  test('demonstrates timer mocking', () => {
    // Mock timers
    jest.useFakeTimers();

    const callback = jest.fn();

    // Set a timeout
    setTimeout(callback, 1000);

    // Fast-forward time
    jest.advanceTimersByTime(1000);

    expect(callback).toHaveBeenCalled();

    // Restore real timers
    jest.useRealTimers();
  });

  // ===================================================================
  // 11. PARAMETERIZED TESTS - test.each()
  // ===================================================================

  // Test the same logic with different inputs
  test.each([
    ['apple', 5],
    ['banana', 6],
    ['orange', 6],
  ])('"%s" has %i characters', (fruit, expectedLength) => {
    expect(fruit).toHaveLength(expectedLength);
  });

  // ===================================================================
  // 12. CONDITIONAL TESTS - skip, only, todo
  // ===================================================================

  // Skip this test (won't run)
  test.skip('this test is skipped', () => {
    expect(true).toBe(false); // This won't run
  });

  // Only run this test (and skip others when .only is present)
  // test.only('only this test runs', () => {
  //   expect(true).toBe(true);
  // });

  // Placeholder for future test
  test.todo('implement user profile test');

  // ===================================================================
  // 13. NESTED DESCRIBE BLOCKS - Organizing Complex Test Suites
  // ===================================================================

  describe('Desktop Navigation', () => {
    test('renders navigation links', () => {
      const { container } = render(<Header />);

      // Target desktop navigation specifically by class
      const desktopNav = container.querySelector('.desktop-nav');

      // Query within the desktop navigation container
      expect(desktopNav?.querySelector('a[href="#react-dom"]')).toBeInTheDocument();
      expect(desktopNav?.querySelector('a[href="#native-hooks"]')).toBeInTheDocument();
      expect(desktopNav?.querySelector('a[href="#custom-hooks"]')).toBeInTheDocument();
      expect(desktopNav?.querySelector('a[href="#game-time"]')).toBeInTheDocument();
    });
  });

  describe('Mobile Navigation', () => {
    test('hamburger button is accessible', () => {
      render(<Header />);

      const button = screen.getByRole('button', { name: /toggle mobile menu/i });
      expect(button).toHaveAttribute('aria-label', 'Toggle mobile menu');
    });

    describe('When mobile menu is open', () => {
      test('shows close button', async () => {
        const user = userEvent.setup();
        render(<Header />);

        // Open menu
        await user.click(screen.getByTestId('mobile-menu-button'));

        // Check close button appears
        const closeButton = screen.getByRole('button', { name: /close mobile menu/i });
        expect(closeButton).toBeInTheDocument();
      });
    });
  });

  // ===================================================================
  // 14. CUSTOM MATCHERS - Extending Jest
  // ===================================================================

  test('demonstrates custom matcher usage', () => {
    render(<Header />);

    // These are custom matchers from @testing-library/jest-dom
    const button = screen.getByTestId('mobile-menu-button');

    expect(button).toBeInTheDocument();     // Element exists in DOM
    expect(button).toBeVisible();           // Element is visible to user
    expect(button).toHaveClass('hamburger-button'); // Has specific CSS class
    expect(button).toHaveAttribute('data-testid', 'mobile-menu-button');
  });

});

// ===================================================================
// 15. GLOBAL TEST CONFIGURATION EXAMPLES
// ===================================================================

// Example of module-level setup (put outside describe blocks)
// Mock a module that's used across multiple tests
// jest.mock('./some-module', () => ({
//   someFunction: jest.fn(() => 'mocked result'),
// }));

// ===================================================================
// KEY TESTING PRINCIPLES DEMONSTRATED:
// ===================================================================
/*
1. **Test Behavior, Not Implementation**: Test what users see and do
2. **Arrange-Act-Assert Pattern**: Structure tests clearly
3. **Descriptive Test Names**: Make failures easy to understand
4. **Test Isolation**: Each test should be independent
5. **Use Real User Interactions**: Prefer userEvent over fireEvent
6. **Query by Accessibility**: Use getByRole when possible
7. **Async Handling**: Use findBy and waitFor for async operations
8. **Meaningful Assertions**: Test the right things at the right level
9. **Mock External Dependencies**: Isolate the component under test
10. **Organize with Describe Blocks**: Group related tests logically
*/