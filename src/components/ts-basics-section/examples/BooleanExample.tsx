import '../../../styles/shared.css';
import './BooleanExample.css';
import { useState } from 'react'

const BooleanExample = () => {

  let [isValid, setIsValid] = useState<boolean>(true);
  const codeWrapper = `const isValid: boolean = ${isValid};`;

  return (
    <>
      <div className='code-block flex'>
        <code style={{ textAlign: 'left' }}>{codeWrapper}</code>
        <div className='toggle-switch' onClick={() => setIsValid(!isValid)}>
          <div className={`toggle-slider ${isValid ? 'active' : ''}`}>
            <div className={`toggle-circle ${isValid ? 'active' : ''}`}></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BooleanExample