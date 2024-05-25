import { useState } from 'react';
export default function Mutable02() {
  const [person, setPerson] = useState({ name: 'John', age: 30 });

  const updateAge = () => {
    // Creating a new object (immutable)
    person.age = person.age + 1;
    setPerson(person);
  };

  return (
    <div>
      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
      <button onClick={updateAge}>Increment Age</button>
    </div>
  );
}
