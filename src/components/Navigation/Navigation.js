import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = ({
  routes,
  url = '',
  className = '',
  activeClassName = '',
}) => {
  return (
    <nav>
      <ul className={className[0]}>
        {routes.map(
          ({ name, path, exact }) =>
            name && (
              <li key={path} className={className[1]}>
                <NavLink
                  to={`${url}${path}`}
                  exact={exact}
                  className={className[2]}
                  activeClassName={activeClassName}
                >
                  {name}
                </NavLink>
              </li>
            ),
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
