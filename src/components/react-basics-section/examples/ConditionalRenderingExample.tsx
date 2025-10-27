import '../../../styles/shared.css';
import { useState } from 'react';

export const ConditionalRenderingExample = () => {

  const codeWrapper = `function HideMe({ isHidden, username }) {
  return (
    <div>
      {!isHidden && (
        <h1>This whole snippet will hide if you click the button!</h1>
      )}
    </div>
  );
}`
  let [isHidden, setIsHidden] = useState<boolean>(false);
  return (
    <>
      <div className='code-block'>
        {!isHidden ? <pre>{codeWrapper}</pre> :
          <pre>{`Told you :)`}</pre>}
      </div>
      <button className='button align-right' onClick={() => setIsHidden(!isHidden)}>
        Toggle isHidden
      </button>
    </>

  )
}