import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import OnBoard from './OnBoard'
import ProfilePage from './ProfilePage'
import Register from './Register'
import './index.css';
import {connect} from 'react-redux';
import {getProfileFetch, logoutUser} from './modules/actions';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import configureStore from './modules/store'

const store = configureStore()

const routing = (
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/" component={App} />
        <Route path="/users/:userId" component={ProfilePage} />
        <Route path="/onboard" component={OnBoard} />
        <Route path="/register" component={Register} />
      </div>
    </Router>
  </Provider>
)

const mapStateToProps = state => ({
  currentUser: state.reducer.currentUser
})

const mapDispatchToProps = dispatch => ({
  getProfileFetch: () => dispatch(getProfileFetch()),
  logoutUser: () => dispatch(logoutUser())
})

ReactDOM.render(
  routing,
  document.getElementById('root')
);
