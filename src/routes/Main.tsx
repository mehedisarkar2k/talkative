import { type RouteObject } from 'react-router-dom';
import { MainLayout } from '../layouts';
import Home from '../screens/home';

const MainRoute: RouteObject = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '',
      element: <Home />,
    },
  ],
};

export { MainRoute };
