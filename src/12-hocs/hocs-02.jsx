import { useState, useEffect } from 'react';
// Higher-order component to add loading indicator
const withLoadingIndicator = (WrappedComponent) => {
  return (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
      // Simulate fetching data
      const fetchData = async () => {
        try {
          const response = await fetch(
            'https://jsonplaceholder.typicode.com/posts/1'
          );
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const jsonData = await response.json();
          setData(jsonData);
          setIsLoading(false);
        } catch (error) {
          setError(error);
          setIsLoading(false);
        }
      };

      fetchData();
    }, []);

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    return <WrappedComponent data={data} {...props} />;
  };
};

// Wrapped component
const MyComponent = ({ data }) => {
  return (
    <div>
      <h1>My Component</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

// Usage: Apply the HOC to the component
const MyComponentWithLoadingIndicator = withLoadingIndicator(MyComponent);

// Usage: Use the enhanced component
export default function HOCs02() {
  return <MyComponentWithLoadingIndicator />;
}
