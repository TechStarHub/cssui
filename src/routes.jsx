import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from './components/Loader';

const Home = lazy(() => import('./pages/Home'));

export const SuspenseProvider = ({ children }) => (
  <Suspense fallback={<Loader />}>{children}</Suspense>
);

const BrowserRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);

export default BrowserRouter;
