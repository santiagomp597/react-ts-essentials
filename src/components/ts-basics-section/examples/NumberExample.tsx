import '../../../styles/shared.css';
import { useState } from 'react'

const NumberExample = () => {

  let [number, setNumber] = useState<number>(42);
  const codeWrapper = `const number: number = ${number};`;
  return (
    <>
      <div className='code-block flex'>
        <code style={{ textAlign: 'left' }}>{codeWrapper}</code>
        <button className='button align-right' onClick={() => setNumber(number + 1)}>Add</button>
      </div>
    </>
  )
}

export default NumberExample