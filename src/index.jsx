import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/HomePage/HomePage'
import { ProductPage } from './pages/ProductPage/ProductPage';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import './global.css';
import { App } from './components/App/App';

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
        path: '/product/:productId',
        element: <ProductPage />,
      },
    ]
  },
], {basename:"/xxxmuck"}
);

createRoot(
  document.querySelector('#app'),
).render(<RouterProvider router={router} />);
