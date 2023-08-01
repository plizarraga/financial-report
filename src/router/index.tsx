import { createBrowserRouter } from 'react-router-dom';
import { LayoutRoot } from '../layouts';
import { About, Home } from '../pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutRoot />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
]);

export default router;
