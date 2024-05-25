import { useState } from 'react';
const Greeting = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};

export default function Components02() {
  const [person, setPerson] = useState({ name: 'John', age: 30 });

  const updateAge = () => {
    // Creating a new object (immutable)
    setPerson((currentPerson) => ({
      ...currentPerson,
      age: currentPerson.age + 1,
    }));
  };

  return (
    <div>
      <Greeting name={person.name} />
      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
      <button onClick={updateAge}>Increment Age</button>
    </div>
  );
}
