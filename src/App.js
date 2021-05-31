import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import store from './redux/store';

const Home = React.lazy(() => import('./pages/Home'));
const Employees = React.lazy(() => import('./pages/Employees'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Suspense fallback={<div>Loading...</div>}>
          <Router basename={process.env.PUBLIC_URL}>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>

              <Route exact path="/employees">
                <Employees />
              </Route>

              <Route status={404}>
                <NotFound />
              </Route>
            </Switch>
          </Router>
        </Suspense>
      </Provider>
    </div>
  );
};

export default App;
