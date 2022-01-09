import { createSelector } from '@reduxjs/toolkit';

const getContacts = state => state.contacts.items;
const getFilter = state => state.contacts.filter;
const getLoading = state => state.contacts.loading;
const getError = state => state.contacts.error;
const getStats = state => state.contacts.items.length;

const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalizedFilter);
    });
  },
);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getContacts,
  getFilter,
  getLoading,
  getError,
  getStats,
  getVisibleContacts,
};
