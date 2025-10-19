import { createHashRouter } from 'react-router-dom';

const createRouteModule = (loader) => async () => {
  const { default: Component } = await loader();

  return { Component };
};

const router = createHashRouter([
  {
    path: '/',
    lazy: createRouteModule(() => import('./pages/Home')),
  },
  {
    path: '/employees',
    lazy: createRouteModule(() => import('./pages/Employees')),
  },
  {
    path: '*',
    lazy: createRouteModule(() => import('./pages/NotFound')),
  },
]);

export default router;
