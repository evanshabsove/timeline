import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import OnBoard from './OnBoard'
import ProfilePage from './ProfilePage'
import './index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

const routing = (
  <Router>
    <div>
      <Route path="/" component={App} />
      <Route path="/profile" component={ProfilePage} />
      <Route path="/onboard" component={OnBoard} />
    </div>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);
