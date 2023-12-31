import { type RouteObject } from 'react-router-dom';
import { AuthRoute } from './Auth';
import { MainRoute } from './Main';

const AppRoute: RouteObject[] = [AuthRoute, MainRoute];

export { AppRoute };
