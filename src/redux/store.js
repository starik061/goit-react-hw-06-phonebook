import { configureStore } from '@reduxjs/toolkit';
// import { combineReducers } from 'redux';
import contactsSliceReducer from './contactsSlice';
import filterSliceReducer from './filterSlice';

// const rootReducer = combineReducers({
//   contacts: contactsSlice.reducer,
//   filtered: filterSlice.reducer,
// });

export const store = configureStore({
  reducer: {
    contacts: contactsSliceReducer,
    filtered: filterSliceReducer,
  },
});
