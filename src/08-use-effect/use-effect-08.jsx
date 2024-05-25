import { useState, useEffect } from 'react';
const FetchDataWithCleanup = ({ url }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(url, { signal });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        if (error.name !== 'AbortError') {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup function to abort the fetch request
    return () => {
      controller.abort();
    };
  }, [url]); // Dependency array with `url`

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <pre>{data?.id}</pre>
    </div>
  );
};

export default function UseEffect08() {
  const [count, setCount] = useState(1);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <FetchDataWithCleanup
        url={'https://jsonplaceholder.typicode.com/posts/' + count}
      />
    </div>
  );
}
