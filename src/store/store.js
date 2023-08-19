import { configureStore } from '@reduxjs/toolkit';
import phoneReducer from '../reducers/phoneReducer';
export const store = configureStore({
  reducer: {
    phoneReducer,
  },
  middleware : (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck : false
  })
})