import { useAppContext } from "../../../hooks/UseAppContext";

export const UseContextExample = () => {
  const { theme, setTheme } = useAppContext();
  const codeWrapper = `function Button() {
  const { theme, setTheme } = useContext(ThemeContext);
  
  return (
    <button 
      className={\`btn btn-\${theme}\`}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      Toggle Theme ({theme})
    </button>
  );
}`;
  return (
    <>
      <div className={`code-block ${theme === 'light' ? 'light' : ''}`}>
        <pre>{codeWrapper}</pre>
      </div>
      <button className='button align-right' onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        change theme to {theme === 'light' ? 'dark' : 'light'}
      </button>
    </>
  );
};
