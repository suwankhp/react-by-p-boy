import { useState } from 'react';

localStorage.setItem('ITEMS', '1');
export default function State03() {
  const [state] = useState(() => {
    const localValue = localStorage.getItem('ITEMS');
    if (!localValue) return '0';
    return localValue;
  });
  return <div>{state}</div>;
}
