import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import AppLayout from './ui/AppLayout';
import Error from './ui/Error';

import MainLayout from './ui/MainLayout';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import PlayGroundAnimations from './pages/PlayGroundAnimations';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <MainLayout />,
      },
      {
        path: '/projects:id',
        element: <Projects />,
      },
      {
        path: '/blog:id',
        element: <Blog />,
      },
      {
        path: '/testing',
        element: <PlayGroundAnimations />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;