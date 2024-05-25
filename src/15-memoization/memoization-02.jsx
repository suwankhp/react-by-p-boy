import { memo, useState } from 'react';
const ChildComponent = memo(
  ({ count, text }) => {
    console.log('ChildComponent rendered');
    return (
      <>
        <div>Text: {text}</div>
        <div>Count: {count}</div>
      </>
    );
  },
  () => {
    return true;
  }
);
const Memoization02 = () => {
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
      <ChildComponent count={count} text={text} />
    </div>
  );
};

export default Memoization02;
