import BrowserRouter from './routes';
import { RouterProvider } from 'react-router-dom';

function App() {
  return <RouterProvider router={BrowserRouter} />;
}

export default App;
