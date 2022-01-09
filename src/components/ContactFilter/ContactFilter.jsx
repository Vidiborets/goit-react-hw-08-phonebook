import PropTypes from 'prop-types';
import s from './ContactFilter.module.scss';

import { connect } from 'react-redux';
import { contactsSelectors, contactsActions } from '../../redux/contact/';

const mapStateToProps = state => ({
  value: contactsSelectors.getFilter(state),
  isLoading: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(contactsActions.changeFilter(e.currentTarget.value)),
});

const ContactFilter = ({ onChange, isLoading, value }) => {
  return (
    <label className={s.label}>
      <input
        type="text"
        name="name"
        value={value}
        onChange={onChange}
        className={s.input}
        placeholder={'Поиск контактов'}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
    </label>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactFilter);

ContactFilter.defaultProps = {
  value: '',
};

ContactFilter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
