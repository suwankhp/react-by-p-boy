import { useState, useEffect } from 'react';
export default function UseEffect07() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    return () => {
      console.log('cleanup function count');
    };
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
