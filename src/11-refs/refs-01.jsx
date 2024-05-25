import { useRef } from 'react';
export default function Refs01() {
  const inputRef = useRef(null);

  const handleClick = () => {
    // Focus the input element imperatively
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}
