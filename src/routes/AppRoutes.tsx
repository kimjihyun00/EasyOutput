import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from 'layouts/MainLayout';
import HomePage from 'pages/Home.page';
import DiaryListPage from 'pages/DiaryList.page';
import PageLayout from 'layouts/PageLayout';

const AppRouter = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        path: '',
        Component: HomePage,
      },
    ],
  },
  {
    path: '/',
    Component: PageLayout,
    children: [
      {
        path: '/list',
        Component: DiaryListPage,
      },
    ],
  },
]);

export default AppRouter;
