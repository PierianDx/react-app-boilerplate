import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import AnotherPage from './containers/AnotherPage';
import NotFound from './containers/NotFound';
import Home from './containers/Home';

import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles/app.scss';

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/another-page" component={AnotherPage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);
export default App;
