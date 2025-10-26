import { createBrowserRouter } from 'react-router-dom';

import Layout from '../components/Layout';

import Home from '../pages/Home';
import Register from '../pages/Register';
// import ErrorPage from '../pages/ErrorPage';
// import NotFound from '../pages/NotFound';

export const router = createBrowserRouter([
{
  path: '/',
  element: <Layout />,
  // errorElement: <ErrorPage />,
  children: [
    { index: true, element: <Home /> },
    { path: 'register', element: <Register /> },
    // Rutas adicionales...
  ]
},
// { path: '*', element: <NotFound /> }
]);