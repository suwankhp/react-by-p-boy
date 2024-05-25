import { useState, useEffect } from 'react';
export default function UseEffect02() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Effect runs after every render');
  });

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
