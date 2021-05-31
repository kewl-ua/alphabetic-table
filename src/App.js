import React from 'react';
import { Provider } from 'react-redux';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import store from './redux/store';

import Employees from './pages/Employees';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        {/* <Router>
          <Switch>
            <Route path="/employees"> */}
              <Employees />
            {/* </Route>
          </Switch>
        </Router> */}
      </Provider>
    </div>
  );
};

export default App;
