import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from 'layouts/MainLayout';
import Home from 'pages/Home.page';

const AppRouter = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        path: '',
        Component: Home,
      },
    ],
  },
]);

export default AppRouter;
