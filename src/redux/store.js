import { configureStore } from '@reduxjs/toolkit';

import { reducer as employeesReducer } from './slices/employee';

const store = configureStore({
  reducer: {
    employee: employeesReducer,
  },
});

export default store;
