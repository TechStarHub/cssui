import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from './components/Loader';

const Home = lazy(() => import('./pages/Home'));
const AllTools = lazy(() => import('./pages/AllTools'));
const GlassMorphism = lazy(() => import('./pages/Tools/GlassMorphism'));

export const SuspenseProvider = ({ children }) => (
  <Suspense fallback={<Loader />}>{children}</Suspense>
);

const BrowserRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/tools',
    children: [
      {
        path: '',
        element: <AllTools />,
      },
      {
        path: 'glassmorphism',
        element: <GlassMorphism />,
      },
    ],
  },
]);

export default BrowserRouter;
