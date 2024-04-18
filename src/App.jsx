import {Link,Outlet} from 'react-router-dom'

const App = () => (
  <div>
    <h1>Super Store</h1>
    <nav>
      <Link to="/about">About</Link> |{' '}
      <Link to="/contact">Contact</Link>
    </nav>
    <main>
      <Outlet />
    </main>
  </div>
);
