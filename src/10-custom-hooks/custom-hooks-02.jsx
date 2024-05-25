import { useState, useEffect } from 'react';

const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove the event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
};
export default function CustomHooks02() {
  const width = useWindowWidth();

  return (
    <div>
      <p>Current window width: {width}px</p>
    </div>
  );
}
