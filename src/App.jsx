import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import { ProfileProvider } from './context/ProfileContext';
import { UserProvider } from './context/UserContext';
import Auth from './views/Auth/Auth';
import ConfirmEmail from './views/Auth/ConfirmEmail';
import Home from './views/Home/Home';

function App() {
  return (
    <UserProvider>
      <ProfileProvider>
        <Router>
          <Header />
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
      </ProfileProvider>
    </UserProvider>
  );
}

export default App;
