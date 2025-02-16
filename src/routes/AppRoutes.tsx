import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/Home.page";
import PageLayout from "../layouts/PageLayout";
import DiaryListPage from "../pages/DiaryList.page";
import DiaryViewPage from "../pages/DiaryView.page";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        path: "",
        Component: HomePage,
      },
    ],
  },
  {
    path: "/",
    Component: PageLayout,
    children: [
      {
        path: "/list",
        Component: DiaryListPage,
      },
      {
        path: "/diary/:diaryId",
        Component: DiaryViewPage,
      },
    ],
  },
]);

export default AppRouter;
