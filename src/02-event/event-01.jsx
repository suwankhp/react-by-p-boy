import { useState } from 'react';
export default function Event01() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleReset = () => {
    setCount(0);
  };
  return (
    <div>
      <p>Current Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
