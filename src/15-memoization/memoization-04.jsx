import { memo, useState } from 'react';
const ChildComponent = memo(({ user }) => {
  console.log('ChildComponent rendered');
  return <div>User: {user.name}</div>;
});
const Memoization04 = () => {
  const [user, setUser] = useState({ name: 'John' });
  const [count, setCount] = useState(0);

  return (
    <div>
      {count}
      <button onClick={() => setCount(count + 1)}>Click</button>
      <input
        type="text"
        value={user.name}
        onChange={(e) => setUser({ name: e.target.value })}
        placeholder="Type something..."
      />
      <ChildComponent user={user} />
    </div>
  );
};

export default Memoization04;
