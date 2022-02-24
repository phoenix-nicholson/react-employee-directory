import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { UserProvider } from './context/UserContext';
import Auth from './views/Auth/Auth';
import ConfirmEmail from './views/Auth/ConfirmEmail';
import Home from './views/Home/Home';

function App() {
  return (
    <UserProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Auth />
          </Route>
          <Route path="/register">
            <Auth isSigningUp />
          </Route>
          <Route path="/confirm-email">
            <ConfirmEmail />
          </Route>
        </Switch>
      </Router>
    </UserProvider>
  );
}

export default App;
