import { useState, useLayoutEffect, useRef, useEffect } from 'react';

export default function UseLayoutEffect02() {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const divRef = useRef(null);
  const [sizeEffect, setSizeEffect] = useState({ width: 0, height: 0 });
  useLayoutEffect(() => {
    if (divRef.current) {
      const { width, height } = divRef.current.getBoundingClientRect();
      setSize({ width, height });
      console.log('Size:', width, height);
    }
  }, []);

  useEffect(() => {
    if (divRef.current) {
      // Measure the size of the box after render
      const { width, height } = divRef.current.getBoundingClientRect();
      setSizeEffect({ width, height });
      console.log('useEffect - Size after render:', width, height);
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
      <div>
        <h2>useLayoutEffect</h2>
        <p>Width: {size.width}px</p>
        <p>Height: {size.height}px</p>
      </div>
      <div>
        <h2>useEffect</h2>
        <p>Width: {sizeEffect.width}px</p>
        <p>Height: {sizeEffect.height}px</p>
      </div>
    </div>
  );
}
