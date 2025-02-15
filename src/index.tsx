import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, RouterProvider } from 'react-router';
import AppRouter from 'routes/AppRoutes';
import { GlobalStyle, ResetStyle } from 'Globalstyles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <ResetStyle />
    <GlobalStyle />
    <RouterProvider router={AppRouter} />
  </React.StrictMode>,
);
