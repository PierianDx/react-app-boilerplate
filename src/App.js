import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import AnotherPage from './components/routes/AnotherPage';
import NotFound from './components/routes/NotFound';
import Home from './components/routes/Home';

import './styles/app.css';

const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/another-page/">Another Page</Link>
          </li>
        </ul>
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
