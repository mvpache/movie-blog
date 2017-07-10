import React from 'react';
import ReactDOM from 'react-dom';
import SignIn from './components/signIn';
import SignUp from './components/signup';
import Users from './components/users';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import reducers from './reducers';
import './index.css';
import App from './App';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <div>
        <Route path='/' component={App} />
        <Route path='/signin' component={SignIn} />
        <Route path='/users' component={Users} />
        <Route path='/signup' component={SignUp} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
