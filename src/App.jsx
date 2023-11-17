import BrowserRouter from './routes';
import { RouterProvider } from 'react-router-dom';
import { SuspenseProvider } from './routes';

function App() {
  return (
    <SuspenseProvider>
      <RouterProvider router={BrowserRouter} />
    </SuspenseProvider>
  );
}

export default App;
