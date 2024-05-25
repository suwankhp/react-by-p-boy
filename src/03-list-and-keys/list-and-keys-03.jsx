import { useState } from 'react';

export default function ListAndKeys03() {
  const [items, setItems] = useState([
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Cherry' },
  ]);
  const [newItem, setNewItem] = useState('');

  const handleAddItem = () => {
    if (newItem.trim() === '') return;
    const newItemObject = {
      id: items.length + 1, // In a real app, use a more reliable unique ID.
      name: newItem,
    };
    setItems([...items, newItemObject]);
    setNewItem('');
  };

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Add new item"
      />
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  );
}
