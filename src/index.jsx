import { createRoot } from 'react-dom/client';
import React from 'react';
import { HomePage } from './pages/HomePage';
import { ProductPage } from './components/ProductPage'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './global.css';
import { App } from './App'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/product',
        element: <ProductPage />,
      },
    ]
  },
], {basename:"/xxxmuck"}
);

createRoot(
  document.querySelector('#app'),
).render(<RouterProvider router={router} />);
