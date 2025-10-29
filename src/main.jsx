import { StrictMode, Suspense } from 'react';
import './index.css';
import { router } from './Routes/Routes.jsx';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';






createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<p>loading...</p>}>
      <RouterProvider router={router}></RouterProvider>
    </Suspense>
  </StrictMode>
);
