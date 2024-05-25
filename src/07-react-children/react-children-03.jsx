import { Children } from 'react';
const Detail = ({ children }) => {
  return <div style={{ fontSize: '20px' }}>{children}</div>;
};
Detail.displayName = 'Detail';

const Parent = ({ children }) => {
  const count = Children.count(children);
  const childrenArray = Children.toArray(children).filter((child) => {
    return (child.props.className ?? '').includes('name');
  });
  const detailArray = Children.toArray(children).filter((child) => {
    // return child.props.name === 'Detail'
    return child.type.name === 'Detail';
  });

  return (
    <div>
      {detailArray}
      <h2>Total Children: {count}</h2>
      {childrenArray}
    </div>
  );
};
export default function ReactChildren03() {
  return (
    <>
      <Parent>
        <p className="name">Child 1</p>
        <p className="name">Child 2</p>
        <p>Child 3</p>
        <Detail>
          <p>This is detail</p>
        </Detail>
      </Parent>
    </>
  );
}
