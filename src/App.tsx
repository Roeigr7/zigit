import './App.css';
import LoginPage from './Pages/LoginPage';
import UserInfoPage from './Pages/UserInfoPage';
import { Provider } from 'react-redux';
import { store } from './redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './Routes/PrivateRoute';

function App() {
  return (
    <Router>
      <Switch>
        <Provider store={store}>
          <Route exact path='/'>
            <LoginPage />
          </Route>
          <PrivateRoute path='/info'>
            <UserInfoPage />
          </PrivateRoute>
        </Provider>
      </Switch>
    </Router>
  );
}

export default App;
