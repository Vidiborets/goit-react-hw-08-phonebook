import PropTypes from 'prop-types';
import s from './ContactList.module.scss';
import { connect } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contact';

const mapStateToProps = state => ({
  contacts: contactsSelectors.getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsOperations.deleteContact(id)),
});

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={s.list}>
      {contacts.map(({ name, number, id }) => (
        <li className={s.itemList} key={id}>
          <span className={s.contactName}>{name}</span>
          <a className={s.contactNumber} href={`tel:${number}`}>
            {number}
          </a>
          <button
            className={s.contactDelete}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};
