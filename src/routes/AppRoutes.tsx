import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/Home.page';
import PageLayout from '../layouts/PageLayout';
import DiaryListPage from '../pages/DiaryList.page';
import DiaryViewPage from '../pages/DiaryView.page';
import DiaryWritePage from '../pages/DiaryWrite.page';
import PlainLayout from '../layouts/PlainLayout';
import LoginPage from '../pages/Login.page';

const AppRouter = createBrowserRouter([
  {
    path: '/login',
    Component: PlainLayout,
    children: [
      {
        path: '',
        Component: LoginPage,
      },
    ],
  },
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
      {
        path: '/diary/write',
        Component: DiaryWritePage,
      },
      {
        path: '/diary/:diaryId',
        Component: DiaryViewPage,
      },
    ],
  },
]);

export default AppRouter;
