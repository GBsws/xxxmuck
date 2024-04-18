import { createRoot } from 'react-dom/client';
import React from 'react';
import { HomePage } from './pages/HomePage';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './global.css';
import { App } from './App'


function ProductPage() {
  return (
    <>
      <h2>Contact</h2>
      <p>Lorem ipsum...</p>
    </>
  );
}

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
