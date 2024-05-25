import { useState } from 'react';
export default function State01() {
  const [state] = useState(1);
  return <div>{state}</div>;
}
