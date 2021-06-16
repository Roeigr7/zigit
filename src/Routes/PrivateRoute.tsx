import React from 'react';
import { useSelector } from '../hooks/useTypedSelector';
import { Redirect, Route, RouteProps } from 'react-router-dom';
interface PrivateRouteProps extends RouteProps {}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ ...rest }) => {
  const { user } = useSelector((state: any) => state.login);

  if (!user.token) return <Redirect exact to='/' />;
  return <Route {...rest} />;
};

export default PrivateRoute;
