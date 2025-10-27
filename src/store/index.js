import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import plansReducer from './slices/plansSlice';
import { userApi } from './apis/userApi';
import { plansApi } from './apis/plansApi';

export const store = configureStore({
  reducer: {
    user: userReducer,
    plans: plansReducer,
    [userApi.reducerPath]: userApi.reducer,
    [plansApi.reducerPath]: plansApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat( userApi.middleware )
    .concat( plansApi.middleware )
});

const { dispatch } = store;

export { dispatch };