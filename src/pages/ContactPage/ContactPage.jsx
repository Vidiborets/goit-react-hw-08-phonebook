import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import ContactFilter from '../../components/ContactFilter';
import ContactForm from '../../components/ContactForm';
import ContactList from '../../components/ContactList';
import ContactStats from '../../components/ContactStats';
import { contactsOperations, contactsSelectors } from '../../redux/contact';
import s from './ContactPage.module.scss';
import Alert from '@mui/material/Alert';
import Loader from '../../components/Loader';

const ContactPage = () => {
  const isLoadingContacts = useSelector(state =>
    contactsSelectors.getLoading(state),
  );
  const isError = useSelector(state => contactsSelectors.getError(state));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <div className={s.section}>
      <ContactForm />
      <ContactFilter />
      <ContactList />
      <ContactStats />
      {isLoadingContacts && <Loader />}
      {isError && <Alert severity="error">{isError}</Alert>}
    </div>
  );
};

export default ContactPage;
