import { useDispatch, useSelector } from 'react-redux';
import classes from './Header.module.css';
import { authActions } from '../store';

const Header = () => {

  const dispatch = useDispatch();

  const { logout } = authActions;

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
            <button onClick={() => dispatch(logout())}>Logout</button>
          </li>
        </ul>
      </nav>}
    </header>
  );
};

export default Header;
