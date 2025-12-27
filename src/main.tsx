import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router';
import { routing } from './routing.tsx';

const root = document.getElementById('root');
if (!root) throw new Error('Failed to find the root element');

createRoot(root).render(
  <StrictMode>
    <RouterProvider router={routing}></RouterProvider>
  </StrictMode>,
);
