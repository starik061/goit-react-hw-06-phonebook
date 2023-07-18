import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filter: (contacts, value) => {
      return contacts.filter(contact => contact.name.includes(value));
    },
  },
});

export const { filter } = filterSlice.actions;

export default filterSlice;
