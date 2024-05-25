import { useState } from 'react';
const Greeting = ({ name, updateAge }) => {
  return (
    <>
      <h1>Hello, {name}!</h1>
      <button onClick={updateAge}>Increment Age</button>
    </>
  );
};

const Wrapper = ({ children, name, updateAge }) => {
  return (
    <div className="wrapper">
      <Greeting name={name} updateAge={updateAge} />
      {children}
    </div>
  );
};

export default function Children01() {
  const [person, setPerson] = useState({ name: 'John', age: 30 });

  const updateAge = () => {
    // Creating a new object (immutable)
    setPerson((currentPerson) => ({
      ...currentPerson,
      age: currentPerson.age + 1,
    }));
  };

  return (
    <Wrapper name={person.name} updateAge={updateAge}>
      <p>Age: {person.age}</p>
    </Wrapper>
  );
}
