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
  (prevProps, nextProps) => {
    if (nextProps.count % 2) {
      return false;
    }
    if (prevProps.text !== nextProps.text) {
      return false;
    }
    return true;
  }
);
const Memoization03 = () => {
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

export default Memoization03;
