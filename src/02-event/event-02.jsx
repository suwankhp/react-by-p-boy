import { useState } from 'react';
export default function Event02() {
  const [count, setCount] = useState(0);
  const [incrementValue, setIncrementValue] = useState(1);
  const [message, setMessage] = useState('');

  const handleIncrement = () => {
    setCount(count + incrementValue);
  };

  const handleReset = () => {
    setCount(0);
    setMessage('');
  };

  const handleNumberChange = (e) => {
    setIncrementValue(Number(e.target.value));
  };

  const handleTextChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div>
      <p>Current Count: {count}</p>
      <input
        type="number"
        value={incrementValue}
        onChange={handleNumberChange}
      />
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleReset}>Reset</button>
      <br />
      <input
        type="text"
        value={message}
        onChange={handleTextChange}
        placeholder="Enter a message"
      />
      <p>Message: {message}</p>
    </div>
  );
}
