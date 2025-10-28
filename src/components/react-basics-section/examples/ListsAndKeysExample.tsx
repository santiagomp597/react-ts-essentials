import '../../../styles/shared.css';
import { useState } from 'react';

export const ListsAndKeysExample = () => {

  let [items, setItems] = useState<string[]>([]);

  const codeWrapper = `const fruits = [];

function ItemList() {
  return (
    <ul>
      {fruits.map((item, index) => (
        <li key={index}>{item}</li>
        {/* index used for simplicity, consider using a unique id for dynamic lists */}
      ))}
    </ul>
  );
}
  
// Render:
${items.length === 0 ? '<ul></ul>' :
      `<ul>
  <li>🍇</li>
  <li>🍈</li>
  <li>🍉</li>
  <li>🍊</li>
</ul>`
    }`;

  const getCodeWrapper = () => {
    return codeWrapper.replace('[]', JSON.stringify(items));
  }
  const toggleItems = () => {
    if (items.length > 0) {
      setItems([]);
    } else {
      setItems(['🍇', '🍈', '🍉', '🍊']);
    }
  }
  return (
    <>
      <div className='code-block'>
        <pre>{getCodeWrapper()}</pre>
      </div>
      <button className='button align-right' onClick={toggleItems}>
        {items.length > 0 ? 'Clear Items' : 'Add Items'}
      </button>
    </>
  )
}