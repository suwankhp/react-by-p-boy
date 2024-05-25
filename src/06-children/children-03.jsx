import { useState } from 'react';
const Greeting = ({ name, updateAge }) => {
  return (
    <>
      <h1>Hello, {name}!</h1>
      <button onClick={updateAge}>Increment Age</button>
    </>
  );
};
const Wrapper = ({ children, name, age }) => {
  const [person, setPerson] = useState({ name, age });
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
      {children({ age: person.age, name: person.name })}
    </div>
  );
};

export default function Children03() {
  return (
    <>
      <Wrapper name="John" age={30}>
        {({ age }) => <p>Age: {age}</p>}
      </Wrapper>
      <Wrapper name="Ken" age={10}>
        {({ age, name }) => (
          <p>
            Name: {name}, Age: {age}
          </p>
        )}
      </Wrapper>
    </>
  );
}
