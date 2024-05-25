import { lazy, Suspense } from 'react';
const LazyComponent = lazy(() => import('../LazyComponent'));

const Suspense01 = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
};
export default Suspense01;
