import { useState, useEffect } from 'react';
export default function UseEffect01() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    // Cleanup on unmount
    return () => clearInterval(timer);
  }, []); // Empty array ensures it runs only once on mount

  return <h1>Timer: {count}</h1>;
}
