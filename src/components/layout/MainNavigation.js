import React from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/auth-context';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  const { isLogin, logout } = useContext(AuthContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Quotes</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink
              to="/quotes"
              className={(navData) => (navData.isActive ? classes.active : '')}
            >
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/new-quote"
              className={(navData) => (navData.isActive ? classes.active : '')}
            >
              New Quotes
            </NavLink>
          </li>
          {!isLogin && (
            <li>
              <NavLink
                to="/login"
                className={(navData) =>
                  navData.isActive ? classes.active : ''
                }
              >
                Login
              </NavLink>
            </li>
          )}

          {isLogin && (
            <li>
              <button onClick={logout}>logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
