import { memo, useState, useCallback } from 'react';
const Button = memo(({ onClick }) => {
  console.log('Button Rendered');
  return <button onClick={onClick}>Click me</button>;
});

const Memoization06 = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <Button onClick={handleClick} />
      <p>Count: {count}</p>
    </div>
  );
};

export default Memoization06;
