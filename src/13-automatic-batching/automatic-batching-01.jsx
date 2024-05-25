import { unstable_batchedUpdates as batch, flushSync } from 'react-dom';
import { useState, useEffect } from 'react';
const AutomaticBatching01 = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleAsyncIncrement = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Batch multiple state updates manually
    batch(() => {
      setCount1((prevCount) => prevCount + 1);
      setCount2((prevCount) => prevCount + 1);
    });
  };

  useEffect(() => {
    console.log('count1, count2, count3: ', count1, count2);
  }, [count1, count2]);

  return (
    <div>
      <p>Count 1: {count1}</p>
      <p>Count 2: {count2}</p>
      <button onClick={handleAsyncIncrement}>Increment After 1s</button>
    </div>
  );
};
export default AutomaticBatching01;
