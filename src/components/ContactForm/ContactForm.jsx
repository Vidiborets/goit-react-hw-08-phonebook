import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './ContactForm.module.scss';
import InputMask from 'react-input-mask';
import { connect } from 'react-redux';

import { contactsOperations, contactsSelectors } from '../../redux/contact';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';

const mapStateToProps = state => ({
  contacts: contactsSelectors.getContacts(state),
  isLoading: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) =>
    dispatch(contactsOperations.addContact(name, number)),
});

const initialState = {
  name: '',
  number: '',
};

const ContactForm = ({ contacts, onSubmit }) => {
  const isLoading = useSelector(state => contactsSelectors.getLoading(state));
  const [state, setState] = useState(initialState);
  const { name, number } = state;

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    setState(prev => ({
      ...prev,
      [name]: value,
    }));
    // switch (name) {
    //     case 'name':
    //         setName(value);
    //         break;
    //     case 'number':
    //         setNumber(value);
    //         break;
    //     default:
    //         return
    // }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const normalizeName = name.toLowerCase();

    const nameIsFind = contacts.find(contact => contact.name === normalizeName);

    const numberInFind = contacts.find(contact => contact.number === number);

    if (!nameIsFind && !numberInFind) {
      onSubmit(normalizeName, number);
      resetForm();
      return;
    }

    toast.info(`${name} уже существует`);
  };

  const resetForm = () => {
    setState(initialState);
  };
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          className={s.input}
          placeholder={'Имя'}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label>
        <InputMask
          mask="+38099999999"
          maskChar=" "
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          className={s.input}
          placeholder={'Номер'}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        ></InputMask>
      </label>
      <button className={s.button} type="submit" disabled={isLoading}>
        Добавить контакт
      </button>
    </form>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};
