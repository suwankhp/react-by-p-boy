import React, {
  useState,
  useRef,
  useLayoutEffect,
  useEffect,
  forwardRef,
  useImperativeHandle,
  useTransition,
  useDeferredValue,
  memo,
  useMemo,
  useCallback,
  lazy,
  Suspense,
  SuspenseList,
  createContext,
  useReducer,
  Fragment,
} from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { unstable_batchedUpdates as batch, flushSync } from 'react-dom';

import ThemeContext from './ThemeContext';
import ThemedButton from './ThemedButton';

import Example from './Example';

// const Element = document.createAttribute('div');
// Element.style = { color: 'red' };
// Element.innerHTML = 'test';

// JSX
// const myElement = <div>test1</div>;
// const myElement2 = () => <div>test2</div>;

function App() {
  // const items = ['apple', 'banana', 'cherry'];
  const [list, setList] = useState(['apple', 'banana', 'cherry']);

  const handleAdd = () => {
    // list.push('pipeapple');
    // setList(list);
    setList(...list, 'pipeapple');
  };

  // items.concat is sum array
  // value of list or array is immutable

  return (
    <>
      <ul>
        {list.map((item) => {
          return (
            <>
              <li key={item + 1}>{item}</li>
            </>
          );
        })}
      </ul>
      <button onClick={handleAdd}>add</button>
    </>
  );
}

export default App;
