import { TabData } from "../../utils/interfaces";
import { ConditionalRenderingExample } from "./examples/ConditionalRenderingExample";
import { CustomHookExample } from "./examples/CustomHookExample";
import { ListsAndKeysExample } from "./examples/ListsAndKeysExample";
import { UseEffectExample } from "./examples/UseEffectExample";

// Tab data for React Basics Section
export const reactBasicsTabs: TabData[] = [
  {
    id: "rendering",
    label: "Rendering",
    title: "React Rendering",
    description:
      "React rendering controls how components are displayed and updated. Learn about JSX, elements, and the virtual DOM.",
    examples: [
      {
        title: "JSX Elements",
        code: `const element = <h1>Hello, React!</h1>;

const user = { firstName: 'John', lastName: 'Doe' };
const greeting = <h1>Hello, {user.firstName}!</h1>;`,
        description:
          "JSX allows you to write HTML-like syntax in JavaScript. Expressions in curly braces are evaluated.",
        sizeClass: "large",
      },
      {
        title: "Conditional Rendering",
        content: <ConditionalRenderingExample />,
        description:
          "Use JavaScript operators like ternary operator to conditionally render different content.",
        sizeClass: "large",
      },
      {
        title: "Lists and Keys",
        content: <ListsAndKeysExample />,
        description:
          "Render lists using map() and provide unique keys for each item to help React track changes.",
        sizeClass: "large",
      },
      {
        title: "Fragment",
        code: `function App() {
  return (
    <React.Fragment>
      <h1>Title</h1>
      <p>Description</p>
    </React.Fragment>
  );
}

// Short syntax
function App() {
  return (
    <>
      <h1>Title</h1>
      <p>Description</p>
    </>
  );
}`,
        description:
          "Use Fragment to group multiple elements without adding extra DOM nodes.",
        sizeClass: "large",
      },
    ],
  },
  {
    id: "components",
    label: "Components",
    title: "React Components",
    description:
      "Components are the building blocks of React applications. Learn about functional and class components, props, and composition.",
    examples: [
      {
        title: "Functional Component",
        code: `function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Arrow function syntax
const Welcome = (props) => {
  return <h1>Hello, {props.name}!</h1>;
};`,
        description:
          "Functional components are JavaScript functions that return JSX. They're the preferred way to write components.",
        sizeClass: "large",
      },
      {
        title: "Props",
        code: `interface ButtonProps {
  text: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

function Button({ text, onClick, variant = 'primary' }: ButtonProps) {
  return (
    <button 
      className={\`btn btn-\${variant}\`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}`,
        description:
          "Props are inputs to components. They're read-only and allow data to flow down from parent to child.",
        sizeClass: "large",
      },
      {
        title: "Component Composition",
        code: `function Card({ children, title }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <div className="card-content">
        {children}
      </div>
    </div>
  );
}

function App() {
  return (
    <Card title="User Profile">
      <p>Name: John Doe</p>
      <p>Email: john@example.com</p>
    </Card>
  );
}`,
        description:
          "Use children prop to create reusable components that can wrap other content.",
        sizeClass: "large",
      },
      {
        title: "Default Props",
        code: `function Button({ text, variant = 'primary', size = 'medium' }) {
  return (
    <button className={\`btn btn-\${variant} btn-\${size}\`}>
      {text}
    </button>
  );
}

// Usage
<Button text="Click me" />
<Button text="Submit" variant="secondary" size="large" />`,
        description:
          "Provide default values for props using ES6 default parameters or defaultProps.",
        sizeClass: "large",
      },
    ],
  },
  {
    id: "context",
    label: "Context",
    title: "React Context",
    description:
      "Context provides a way to pass data through the component tree without having to pass props down manually at every level.",
    examples: [
      {
        title: "Creating Context",
        code: `import React, { createContext, useContext } from 'react';

// Create context
const ThemeContext = createContext();

// Provider component
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}`,
        description:
          "Create context using createContext() and provide values using the Provider component.",
        sizeClass: "large",
      },
      {
        title: "Consuming Context",
        code: `function Button() {
  const { theme, setTheme } = useContext(ThemeContext);
  
  return (
    <button 
      className={\`btn btn-\${theme}\`}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      Toggle Theme ({theme})
    </button>
  );
}`,
        description:
          "Use useContext hook to consume context values in functional components.",
        sizeClass: "large",
      },
      {
        title: "Custom Hook for Context",
        code: `// Custom hook for theme context
function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

// Usage in component
function Header() {
  const { theme } = useTheme();
  
  return (
    <header className={\`header header-\${theme}\`}>
      <h1>My App</h1>
    </header>
  );
}`,
        description:
          "Create custom hooks to encapsulate context logic and provide better error handling.",
        sizeClass: "large",
      },
      {
        title: "Multiple Contexts",
        code: `function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <LanguageProvider>
          <MainApp />
        </LanguageProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

function MainApp() {
  const { theme } = useTheme();
  const { user } = useUser();
  const { language } = useLanguage();
  
  return <div>App content</div>;
}`,
        description:
          "You can use multiple context providers to manage different pieces of global state.",
        sizeClass: "large",
      },
    ],
  },
  {
    id: "hooks",
    label: "Hooks",
    title: "React Hooks",
    description:
      "Hooks let you use state and other React features in functional components. Learn about built-in hooks and creating custom ones.",
    examples: [
      {
        title: "useEffect Hook",
        content: <UseEffectExample />,
        description:
          "useEffect hook lets you perform side effects. Use dependency array to control when it runs.",
        sizeClass: "large",
      },
      {
        title: "useRef Hook",
        code: `import React, { useRef, useEffect } from 'react';

function TextInput() {
  const inputRef = useRef(null);
  const countRef = useRef(0);
  
  const focusInput = () => {
    inputRef.current.focus();
  };
  
  const handleClick = () => {
    countRef.current += 1;
    console.log('Clicked', countRef.current, 'times');
  };
  
  useEffect(() => {
    // Focus input on mount
    inputRef.current.focus();
  }, []);
  
  return (
    <div>
      <input 
        ref={inputRef}
        type="text" 
        placeholder="Type something..." 
      />
      <button onClick={focusInput}>Focus Input</button>
      <button onClick={handleClick}>
        Click me (check console)
      </button>
    </div>
  );
}`,
        description:
          "useRef hook creates a mutable ref object that persists across renders. Use it to access DOM elements or store mutable values.",
        sizeClass: "large",
      },
      {
        title: "Custom Hook",
        content: <CustomHookExample />,
        description:
          "Custom hooks let you extract component logic into reusable functions that can use other hooks.",
        sizeClass: "large",
      },
      {
        title: "useCallback Hook",
        code: `import React, { useState, useCallback, memo } from 'react';

// Child component that only re-renders when props change
const ExpensiveChild = memo(({ onButtonClick, count }) => {
  console.log('ExpensiveChild rendered');
  return (
    <div>
      <p>Count from parent: {count}</p>
      <button onClick={onButtonClick}>
        Increment from child
      </button>
    </div>
  );
});

function Parent() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0);
  
  // Memoized callback - only recreated when count changes
  const handleIncrement = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);
  
  return (
    <div>
      <h3>Parent Component</h3>
      <button onClick={() => setOtherState(prev => prev + 1)}>
        Change other state: {otherState}
      </button>
      <ExpensiveChild 
        onButtonClick={handleIncrement} 
        count={count} 
      />
    </div>
  );
}`,
        description:
          "useCallback memoizes callback functions to prevent unnecessary re-renders of child components. Use it when passing callbacks to optimized child components.",
        sizeClass: "large",
      },
    ],
  },
];
