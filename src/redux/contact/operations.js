import axios from 'axios';
import { toast } from 'react-toastify';
import actions from './actions';
import {
  fetchContactsSuccess,
  fetchContactsRequest,
  fetchContactsError,
} from './actions';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com'

const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());

  try {
    const { data } = await axios.get('/contacts');
    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error.message));
    toast.error(error.message);
  }
};

const addContact = (name, number) => async dispatch => {
  const contact = { name, number };

  dispatch(actions.addContactRequest());

  try {
    const { data } = await axios.post('/contacts', contact);

    toast.success('Add');
    dispatch(actions.addContactSuccess(data));
  } catch (error) {
    dispatch(actions.addContactError(error.message));
    toast.error(error.message);
  }
};

const deleteContact = id => async dispatch => {
  dispatch(actions.deleteContactRequest());

  try {
    await axios.delete(`/contacts/${id}`);

    toast.success('Delete');

    dispatch(actions.deleteContactSuccess(id));
  } catch (error) {
    dispatch(actions.deleteContactError(error.message));
    toast.error(error.message);
  }
};

// eslint-disable-next-line
export default { fetchContacts, addContact, deleteContact };
