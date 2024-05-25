import { useState } from 'react';
export default function State02() {
  const [state] = useState(() => {
    return 1;
  });
  return <div>{state}</div>;
}
