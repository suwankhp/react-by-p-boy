import { useState, Suspense } from 'react';
import Albums from '../Albums';
const Suspense02 = () => {
  const [show, setShow] = useState(false);
  const [artist, setArtist] = useState({
    id: 'the-beatles',
    name: 'The Beatles',
  });
  if (show) {
    return (
      <Suspense fallback={<div>...{artist.name}</div>}>
        <Albums artistId={artist.id} />
      </Suspense>
    );
  } else {
    return (
      <button onClick={() => setShow(true)}>
        Open The Beatles artist page
      </button>
    );
  }
};

export default Suspense02;
