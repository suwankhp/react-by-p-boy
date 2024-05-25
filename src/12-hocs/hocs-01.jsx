// Higher-order component to add additional props
const withAdditionalProps = (WrappedComponent) => {
  // Return a new component that accepts additional props
  return (props) => {
    // Add additional props here
    const additionalProps = {
      additionalProp1: 'Value 1',
      additionalProp2: 'Value 2',
    };

    // Render the wrapped component with additional props
    return <WrappedComponent {...props} {...additionalProps} />;
  };
};

// Component to be wrapped
const MyComponent = ({ additionalProp1, additionalProp2 }) => {
  return (
    <div>
      <p>Additional Prop 1: {additionalProp1}</p>
      <p>Additional Prop 2: {additionalProp2}</p>
    </div>
  );
};

// Apply the HOC to the component
const MyComponentWithAdditionalProps = withAdditionalProps(MyComponent);

// Usage: Use the enhanced component
export default function HOCs01() {
  return <MyComponentWithAdditionalProps />;
}
