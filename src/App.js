import React from 'react';
import { Provider } from 'react-redux';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import store from './redux/store';

import Employees from './pages/Employees';

const GHUB_BASE_URL = '/alphabetic-table';

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path={`${GHUB_BASE_URL}/employees`}>
              <Employees />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
};

export default App;
