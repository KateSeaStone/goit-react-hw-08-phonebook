import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { changeFilter } from "./contacts-actions";
import {
  fetchContacts,
  addContact,
  deleteContact,
} from "./contacts-operations";

const items = createReducer([], {
  [fetchContacts.fulfilled]: (state, action) => action.payload,
  [addContact.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteContact.fulfilled]: (state, action) => {
    return state.filter(({ id }) => id !== action.payload);
  },
});

const loading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,

  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,

  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
});

const filter = createReducer("", {
  [changeFilter]: (_, { payload }) => {
    return payload;
  },
});

export default combineReducers({
  items,
  loading,
  filter,
});
