import { Children } from 'react';
const Parent = ({ children }) => {
  // Count children
  const count = Children.count(children);

  // Convert children to array
  const childrenArray = Children.toArray(children);

  // Log each child
  Children.forEach(children, (child) => {
    console.log(child);
  });

  // const singleChild = Children.only(children);

  return (
    <div>
      <h2>Total Children: {count}</h2>
      {/* {singleChild} */}
      {Children.map(childrenArray, (child, index) => (
        <div className="child-wrapper" style={{ color: 'red' }}>
          {child}
        </div>
      ))}
    </div>
  );
};
export default function ReactChildren01() {
  return (
    <>
      <Parent>
        <p>Child 1</p>
        <p>Child 2</p>
        <p>Child 3</p>
      </Parent>
    </>
  );
}
