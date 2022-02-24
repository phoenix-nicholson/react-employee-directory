import { Redirect, Route } from 'react-router-dom/cjs/react-router-dom.min';
import { useUser } from '../context/UserContext';

export default function PrivateRoute({ children, ...rest }) {
  const {
    user: { email },
  } = useUser;

  return (
    <Route
      {...rest}
      render={({ location }) =>
        email ? children : <Redirect to={{ pathname: '/login', state: { from: location } }} />
      }
    />
  );
}
