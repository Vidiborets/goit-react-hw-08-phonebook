import { createAction } from '@reduxjs/toolkit';

// const addContacts = createAction('contacts/add',text=>({
//         payload:{
//             id:shortid.generate(),
//         ...text
//         }
// }))

export const fetchContactsRequest = createAction(
  'contacts/fetchContactsRequest',
);
export const fetchContactsSuccess = createAction(
  'contacts/fetchContactsSuccess',
);
export const fetchContactsError = createAction('contacts/fetchContactsError');

const addContactRequest = createAction('contacts/addContactsRequest');
const addContactSuccess = createAction('contacts/addContactsSuccess');
const addContactError = createAction('contacts/addContactsError');

const deleteContactRequest = createAction('contacts/deleteContactsRequest');
const deleteContactSuccess = createAction('contacts/deleteContactsSuccess');
const deleteContactError = createAction('contacts/deleteContactsError');

const changeFilter = createAction('contacts/changeFilter');

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,

  addContactRequest,
  addContactSuccess,
  addContactError,

  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,

  changeFilter,
};
