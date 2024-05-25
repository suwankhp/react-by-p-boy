import { useRef, useState } from 'react';

export default function Refs02() {
  const counterRef = useRef(0); // Initialize the ref with initial value 0
  const [, setState] = useState(false);

  const increment = () => {
    counterRef.current++; // Increment the counter value stored in the ref
    console.log('Counter:', counterRef.current);
  };

  return (
    <div>
      <p>Counter: {counterRef.current}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={() => setState((state) => !state)}>Force</button>
    </div>
  );
}
