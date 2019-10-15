import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import OnBoard from './OnBoard'
import ProfilePage from './ProfilePage'
import Register from './Register'
import Search from './Search'
import EditProfile from './EditProfile'
import './index.css';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import configureStore from './modules/store'

const store = configureStore()

const routing = (
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/" component={App} />
        <Route path="/users/:userId" component={ProfilePage} />
        <Route path="/editUser/:userId" component={EditProfile} />
        <Route path="/onboard" component={OnBoard} />
        <Route path="/register" component={Register} />
        <Route path="/search" component={Search} />
      </div>
    </Router>
  </Provider>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);
