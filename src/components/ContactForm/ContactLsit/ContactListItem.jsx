import PropTypes from 'prop-types';
import { ListItem } from './ContactList.styled';

export function ContactListItem({ id, name, number, onClickDelete }) {
  return (
    <ListItem>
      {name}: {number}
      <button type="button" onClick={() => onClickDelete(id)}>
        Delete
      </button>
    </ListItem>
  );
}

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClickDelete: PropTypes.func.isRequired,
};
