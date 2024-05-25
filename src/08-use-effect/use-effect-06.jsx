import { useState, useEffect } from 'react';
const Timer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    // Cleanup function
    return () => {
      console.log('Cleanup function');
      clearInterval(timer);
    };
  }, []); // Empty array ensures this effect runs only once

  return <h1>Timer: {count}</h1>;
};

export default function UseEffect06() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <div>{count % 2 && <Timer />}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
