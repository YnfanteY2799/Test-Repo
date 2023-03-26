import { Suspense, lazy } from 'react';
import SuspenseLoader from 'src/components/SuspenseLoader';

const Loader = (Component: Function) => (props: JSX.IntrinsicAttributes) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

const TestRoute = Loader(lazy(() => import('src/content/test/Layoute')));

const testRoutes = [
  {
    path: '/',
    element: <TestRoute />
  }
];

export default testRoutes;
