import { useState } from 'react';
const Greeting = ({ name, updateAge }) => {
  return (
    <>
      <h1>Hello, {name}!</h1>
      <button onClick={updateAge}>Increment Age</button>
    </>
  );
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
      <Greeting name={person.name} updateAge={updateAge} />
      <p>Age: {person.age}</p>
    </div>
  );
}
