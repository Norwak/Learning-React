import { useDispatch, useSelector } from 'react-redux';
import classes from './Header.module.css';
import { authActions } from '../store/auth.slice';

const Header = () => {
  const loggedIn = useSelector(state => state.auth.loggedIn);
  const dispatch = useDispatch();

  function logout() {
    dispatch(authActions.logout());
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {loggedIn && <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logout}>Logout</button>
          </li>
        </ul>
      </nav>}
    </header>
  );
};

export default Header;
