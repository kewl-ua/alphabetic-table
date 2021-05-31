import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import store from './redux/store';

import Home from './pages/Home';
import Employees from './pages/Employees';

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/employees">
              <Employees />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
};

export default App;
