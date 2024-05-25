import { useState, useEffect } from 'react';
export default function UseEffect03() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Effect runs only once after the initial render');
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
