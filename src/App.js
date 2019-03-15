import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import AnotherPage from './components/routes/AnotherPage';
import NotFound from './components/routes/NotFound';
import Home from './components/routes/Home';

import './styles/app.scss';

const App = () => (
  <Router>
    <div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              alt="Bulma Logo"
              width="112"
              height="28"
            />
          </a>

          <button
            type="button"
            className="navbar-burger burger as-link"
            aria-label="menu"
            aria-expanded="false"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item" to="/">
              Home
            </Link>
            <Link className="navbar-item" to="/another-page/">
              Another Page
            </Link>
          </div>
        </div>
      </nav>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/another-page" component={AnotherPage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);
export default App;
