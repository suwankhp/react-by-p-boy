import { useMemo, useState } from 'react';
const ExpensiveCalculation = ({ count }) => {
  const expensiveCalculation = (num) => {
    console.log('Calculating...');
    // Simulate an expensive calculation
    for (let i = 0; i < 1000000000; i++) {}
    return num * 2;
  };

  const computedValue = useMemo(() => expensiveCalculation(count), [count]);

  return <div>Computed Value: {computedValue}</div>;
};

const Memoization05 = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <ExpensiveCalculation count={count} />
    </div>
  );
};

export default Memoization05;
