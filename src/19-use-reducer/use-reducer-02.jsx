import { useReducer } from 'react';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'setFieldValue':
      return { ...state, [action.field]: action.value };
    case 'reset':
      return initialState;
    default:
      throw new Error();
  }
}

const UseReducer02 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: 'setFieldValue',
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleReset = () => {
    dispatch({ type: 'reset' });
  };

  return (
    <div>
      <input
        name="firstName"
        value={state.firstName}
        onChange={handleChange}
        placeholder="First Name"
      />
      <input
        name="lastName"
        value={state.lastName}
        onChange={handleChange}
        placeholder="Last Name"
      />
      <input
        name="email"
        value={state.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <button onClick={handleReset}>Reset</button>
      <div>
        <h3>Form Data:</h3>
        <p>First Name: {state.firstName}</p>
        <p>Last Name: {state.lastName}</p>
        <p>Email: {state.email}</p>
      </div>
    </div>
  );
};
export default UseReducer02;
