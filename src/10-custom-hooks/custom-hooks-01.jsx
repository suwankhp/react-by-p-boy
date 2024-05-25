import { useState } from 'react';
const useCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return { count, increment };
};

export default function CustomHooks01() {
  const { count, increment } = useCounter();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
