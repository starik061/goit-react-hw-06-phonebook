import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import contactsSlice from './contactsSlice';
import filterSlice from './filterSlice';

const rootReducer = combineReducers({
  contacts: contactsSlice.reducer,
  filter: filterSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
