import React from 'react';
import { useSelector } from '../hooks/useTypedSelector';
import { Redirect, Route, RouteProps } from 'react-router-dom';

interface PublicRouteProps extends RouteProps {}

const PublicRoute: React.FC<PublicRouteProps> = ({
  component: Component,
  ...rest
}: any) => {
  const { token } = useSelector((state: any) => state.login.user);

  return (
    <Route
      {...rest}
      render={(props) =>
        !token ? <Component {...props} /> : <Redirect to='/info' />
      }
    />
  );
};
export default PublicRoute;
