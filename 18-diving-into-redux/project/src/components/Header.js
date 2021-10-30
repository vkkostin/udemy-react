import { useSelector, useDispatch } from 'react-redux'
import classes from './Header.module.css';
import { actions } from '../store/auth';

const Header = () => {
  const dispatch = useDispatch()
  const isAuth = useSelector(state => state.auth.isAuthenticated)

  const onLogout = () => dispatch(actions.logout())

  const navUI = 
    <nav>
      <ul>
        <li>
          <a href='/'>My Products</a>
        </li>
        <li>
          <a href='/'>My Sales</a>
        </li>
        <li>
          <button onClick={onLogout}>Logout</button>
        </li>
      </ul>
    </nav>

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth ? navUI : null}
    </header>
  );
};

export default Header;
