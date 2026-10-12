import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './features/uiSlice';
import propertyReducer from './features/propertySlice';

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    property: propertyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
