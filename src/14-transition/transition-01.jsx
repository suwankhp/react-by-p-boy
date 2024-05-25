import { useTransition, useState } from 'react';
const Transition01 = () => {
  const [isPending, startTransition] = useTransition();
  const [urgentCount, setUrgentCount] = useState(0);
  const [nonUrgentItems, setNonUrgentItems] = useState([]);

  // Urgent update handler
  const handleUrgentClick = () => {
    setUrgentCount((prevCount) => prevCount + 1);
  };

  // Non-urgent update handler
  const handleNonUrgentClick = () => {
    startTransition(() => {
      const newItems = Array.from({ length: 20000 }, (_, i) => `Item ${i}`);
      setNonUrgentItems(newItems);
    });
  };

  return (
    <div>
      <div>
        <button onClick={handleUrgentClick}>Urgent Increment</button>
        <p>Urgent Count: {urgentCount}</p>
      </div>
      <div>
        <button onClick={handleNonUrgentClick}>Non-Urgent Load Items</button>
        {isPending && <p>Loading...</p>}
        <ul>
          {nonUrgentItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Transition01;
