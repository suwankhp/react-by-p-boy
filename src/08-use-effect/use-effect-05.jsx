import { useState, useEffect } from 'react';
export default function UseEffect05() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This will cause an infinite loop
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
