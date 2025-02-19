import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GlobalStyle, ResetStyle } from './Globalstyles.tsx';
import { RouterProvider } from 'react-router';
import AppRouter from './routes/AppRoutes.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ResetStyle />
    <GlobalStyle />
    <RouterProvider router={AppRouter} />
  </StrictMode>,
);
