import React from 'react';
import { NavLink } from 'react-router-dom';
import headerRoutes from '../../routers/headerRoutes';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          {headerRoutes.map(
            ({ name, path, exact }) =>
              name && (
                <li key={path}>
                  <NavLink to={path} exact={exact}>
                    {name}
                  </NavLink>
                </li>
              ),
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
