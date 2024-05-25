import { useState, useDeferredValue, useEffect, Suspense } from 'react';
import SearchResults from '../SearchResults';
const Suspense03 = () => {
  const [query, setQuery] = useState('');
  const search = useDeferredValue(query);
  useEffect(() => {
    console.log(query, search);
  }, [query, search]);
  return (
    <>
      <label>
        Search albums:
        <input value={query} onChange={(e) => setQuery(e.target.value)} />
      </label>
      <Suspense fallback={<h2>Loading...</h2>}>
        <SearchResults query={query} />
      </Suspense>
    </>
  );
};
export default Suspense03;
