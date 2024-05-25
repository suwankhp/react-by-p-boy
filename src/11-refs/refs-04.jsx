import {
  forwardRef,
  useRef,
  useImperativeHandle,
  useState,
  useEffect,
} from 'react';
const ChildComponent = forwardRef((props, ref) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(count);

  // Update the ref's current value whenever count changes
  useEffect(() => {
    counterRef.current = count;
  }, [count]);

  // Expose only the increment method via useImperativeHandle
  useImperativeHandle(
    ref,
    () => ({
      increment: () => {
        setCount(count + 1);
      },
    }),
    [count]
  ); // Re-create the handle when count changes

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
});

export default function Refs04() {
  const childRef = useRef(null);

  const handleClick = () => {
    childRef.current.increment(); // Call the increment method exposed by ChildComponent
  };

  return (
    <div>
      <ChildComponent ref={childRef} />
      <button onClick={handleClick}>Increment Count</button>
    </div>
  );
}
