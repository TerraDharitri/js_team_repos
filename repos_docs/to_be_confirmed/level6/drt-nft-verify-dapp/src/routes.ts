import { withPageTitle } from 'components';
import { dAppName } from 'config';
import { Build } from 'pages/Build';
import { Home } from 'pages/Home';
import { Result } from 'pages/Result';
import { Verification } from 'pages/Verification';

export const routeNames = {
  home: '/',
  verify: '/verify',
  result: '/result',
  build: '/build'
};

const routes = [
  {
    path: routeNames.home,
    component: Home
  },
  {
    path: routeNames.verify,
    title: 'Verification',
    component: Verification
  },
  {
    path: routeNames.build,
    title: 'Build',
    component: Build
  },
  {
    path: routeNames.result,
    title: 'Result',
    component: Result,
    authenticatedRoute: false
  }
];

const mappedRoutes = routes.map((route) => {
  const title = route.title
    ? `${route.title} •  Dharitri ${dAppName}`
    : dAppName;

  const requiresAuth = Boolean(route.authenticatedRoute);
  const wrappedComponent = withPageTitle(title, route.component);

  return {
    path: route.path,
    component: wrappedComponent,
    authenticatedRoute: requiresAuth
  };
});

export default mappedRoutes;
