import {Link,Outlet} from 'react-router-dom'

export const App = () => (
  <div>
    <h1>Designový nábytek</h1>
    <nav>
      <Link to="/">Main Page</Link> |{' '}
      <Link to="/product">Products</Link>
    </nav>
    <main>
      <Outlet />
    </main>
  </div>
);
