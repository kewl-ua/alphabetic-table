import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import store from './redux/store';
import router from './router';

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />
    </Provider>
  );
};

export default App;
