import { useState, useDeferredValue, useEffect, useMemo } from 'react';
const UseDeferredValue01 = () => {
  const [filter, setFilter] = useState('');
  const deferredFilter = useDeferredValue(filter);

  const items = Array.from({ length: 20000 }, (_, i) => `item ${i}`);
  const filteredItems = useMemo(
    () => items.filter((item) => item.includes(deferredFilter)),
    [deferredFilter]
  );

  useEffect(() => {
    console.log(filter, deferredFilter);
  }, [filter, deferredFilter]);

  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter items"
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
export default UseDeferredValue01;
