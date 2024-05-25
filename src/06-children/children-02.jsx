import { useState } from 'react';
const Greeting = ({ name, updateAge }) => {
  return (
    <>
      <h1>Hello, {name}!</h1>
      <button onClick={updateAge}>Increment Age</button>
    </>
  );
};

const Wrapper = ({ children }) => {
  const [person, setPerson] = useState({ name: 'John', age: 30 });
  const updateAge = () => {
    // Creating a new object (immutable)
    setPerson((currentPerson) => ({
      ...currentPerson,
      age: currentPerson.age + 1,
    }));
  };

  return (
    <div className="wrapper">
      <Greeting name={person.name} updateAge={updateAge} />
      {children({ age: person.age })}
    </div>
  );
};

export default function Children02() {
  const [person, setPerson] = useState({ name: 'John', age: 30 });

  const updateAge = () => {
    // Creating a new object (immutable)
    setPerson((currentPerson) => ({
      ...currentPerson,
      age: currentPerson.age + 1,
    }));
  };

  return <Wrapper>{({ age }) => <p>Age: {age}</p>}</Wrapper>;
}
