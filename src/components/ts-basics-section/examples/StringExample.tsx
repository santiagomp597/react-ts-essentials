import '../../../styles/shared.css';
import { useState } from 'react'

const StringExample = () => {

  let [message, setMessage] = useState<string>('Hello TypeScript!');
  const codeWrapper = `let message: string = "${message}";`;
  return (
    <>
      <div className='code-block'>
        <code>{codeWrapper}</code>
      </div>
      <div className='input-wrapper'>
        <label className='label' htmlFor="example-input">Update the variable!</label>
        <input
          id="example-input"
          className='input-field'
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
    </>
  )
}

export default StringExample