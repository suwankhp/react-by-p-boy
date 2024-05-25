import { flushSync } from 'react-dom';
import { useState, useEffect } from 'react';

const AutomaticBatching02 = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    // Flush the state update synchronously
    flushSync(() => {
      setCount((count) => count + 1);
    });

    setCount((count) => count + 1);
    // This console.log will show the updated count
    console.log('Updated count:', count + 1);
  };
  useEffect(() => {
    console.log('Count: ', count);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default AutomaticBatching02;
