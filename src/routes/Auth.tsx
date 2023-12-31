import { type RouteObject } from 'react-router-dom';
import { AuthLayout } from '../layouts';

const AuthRoute: RouteObject = {
  path: '/auth',
  element: <AuthLayout />,
  children: [
    {
      path: '',
      element: <div>Login here</div>,
    },
    {
      path: 'login',
      element: <div>Login here</div>,
    },
    {
      path: 'register',
      element: <div>Register here</div>,
    },
  ],
};

export { AuthRoute };
