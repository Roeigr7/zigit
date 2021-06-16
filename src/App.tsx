import './App.css';
import LoginPage from './Pages/LoginPage';
import UserInfoPage from './Pages/UserInfoPage';
import { Provider } from 'react-redux';
import { store } from './redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './Routes/PrivateRoute';
import PublicRoute from './Routes/PublicRoute';

function App() {
  return (
    <Router>
      <Switch>
        <Provider store={store}>
          <PublicRoute exact path='/' component={LoginPage} />
          <PrivateRoute path='/info' component={UserInfoPage} />
        </Provider>
      </Switch>
    </Router>
  );
}

export default App;
