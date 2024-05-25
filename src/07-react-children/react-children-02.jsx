import { Children } from 'react';
const Parent = ({ children }) => {
  const count = Children.count(children);
  const childrenArray = Children.toArray(children).filter((child) => {
    return (child.props.className ?? '').includes('name');
  });

  return (
    <div>
      <h2>Total Children: {count}</h2>
      {childrenArray}
    </div>
  );
};
export default function ReactChildren02() {
  return (
    <>
      <Parent>
        <p className="name">Child 1</p>
        <p className="name">Child 2</p>
        <p>Child 3</p>
      </Parent>
    </>
  );
}
