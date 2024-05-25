import { forwardRef, useRef, useImperativeHandle } from 'react';
const ChildComponent = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  // Define a method to focus on the input field
  const focusInput = () => {
    inputRef.current.focus();
  };

  // Expose the focusInput method via useImperativeHandle
  useImperativeHandle(ref, () => ({
    focus: focusInput,
  }));

  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
});

export default function Refs03() {
  const childRef = useRef(null);

  const handleClick = () => {
    childRef.current.focus();
  };

  return (
    <div>
      <ChildComponent ref={childRef} />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}
