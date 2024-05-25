import { useState } from 'react';
const Greeting = () => {
  return <h1>Hello, World!</h1>;
};

export default function Components01() {
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
      <Greeting />
      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
      <button onClick={updateAge}>Increment Age</button>
    </div>
  );
}
