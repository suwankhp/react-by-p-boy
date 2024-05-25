import { useState } from 'react';
export default function Mutable01() {
  const [items, setItems] = useState(['Apple', 'Banana', 'Cherry']);

  const addItem = () => {
    const newItem = 'Date';
    items.push(newItem);
    setItems(items);
  };

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={addItem}>Add Item</button>
    </div>
  );
}
