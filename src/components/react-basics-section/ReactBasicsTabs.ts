import { TabData } from "../../types/tab-data";

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
        code: `function Welcome({ isLoggedIn, username }) {
  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome back, {username}!</h1>
      ) : (
        <h1>Please sign in.</h1>
      )}
    </div>
  );
}`,
        description:
          "Use JavaScript operators like ternary operator to conditionally render different content.",
        sizeClass: "large",
      },
      {
        title: "Lists and Keys",
        code: `const items = ['Apple', 'Banana', 'Orange'];

function ItemList() {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}`,
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
        title: "useState Hook",
        code: `import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
}`,
        description:
          "useState hook allows you to add state to functional components. Returns current state and setter function.",
        sizeClass: "large",
      },
      {
        title: "useEffect Hook",
        code: `import React, { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function fetchUser() {
      setLoading(true);
      const response = await fetch(\`/api/users/\${userId}\`);
      const userData = await response.json();
      setUser(userData);
      setLoading(false);
    }
    
    fetchUser();
  }, [userId]); // Re-run when userId changes
  
  if (loading) return <div>Loading...</div>;
  return <div>Hello, {user?.name}!</div>;
}`,
        description:
          "useEffect hook lets you perform side effects. Use dependency array to control when it runs.",
        sizeClass: "large",
      },
      {
        title: "Custom Hook",
        code: `// Custom hook for fetching data
function useApi(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    
    fetchData();
  }, [url]);
  
  return { data, loading, error };
}

// Usage
function UserList() {
  const { data: users, loading, error } = useApi('/api/users');
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}`,
        description:
          "Custom hooks let you extract component logic into reusable functions that can use other hooks.",
        sizeClass: "large",
      },
      {
        title: "useReducer Hook",
        code: `import React, { useReducer } from 'react';

function counterReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      throw new Error(\`Unknown action: \${action.type}\`);
  }
}

function Counter() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  
  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}`,
        description:
          "useReducer is useful for complex state logic. It takes a reducer function and initial state.",
        sizeClass: "large",
      },
    ],
  },
];
