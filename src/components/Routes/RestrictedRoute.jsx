import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';

import { authSelectors } from '../../redux/users';

const { Navigate } = require('react-router-dom');

const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

RestrictedRoute.propTypes = {
  component: PropTypes.object,
  redirectTo: PropTypes.string,
};

export default RestrictedRoute;
