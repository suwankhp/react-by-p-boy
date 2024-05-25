import { useState, useLayoutEffect, useRef } from 'react';

export default function UseLayoutEffect01() {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const divRef = useRef(null);

  useLayoutEffect(() => {
    if (divRef.current) {
      const { width, height } = divRef.current.getBoundingClientRect();
      setSize({ width, height });
      console.log('Size:', width, height);
    }
  }, []);

  return (
    <div>
      <div
        ref={divRef}
        style={{
          width: '200px',
          height: '100px',
          backgroundColor: 'lightblue',
        }}
      >
        Measure me!
      </div>
      <p>Width: {size.width}px</p>
      <p>Height: {size.height}px</p>
    </div>
  );
}
