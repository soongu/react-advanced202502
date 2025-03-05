import { useSelector } from 'react-redux';
import classes from './Header.module.css';

const Header = () => {

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const count = useSelector(state => state.counter.count);

  return (
    <header className={classes.header}>
      <h1>Redux Auth { count } </h1>
      {isLoggedIn && <nav>
        <ul>
          <li>
            <a href='/public'>My Products</a>
          </li>
          <li>
            <a href='/public'>My Sales</a>
          </li>
          <li>
            <button>Logout</button>
          </li>
        </ul>
      </nav>}
    </header>
  );
};

export default Header;
