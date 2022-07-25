import PropTypes from 'prop-types';
import { FilterContainer, Input, Label, Span } from './Filter.styled';

export function Filter({ value, onFilter }) {
  return (
    <FilterContainer>
      <Label />
      <Span>Find contacts by name</Span>
      <Input
        name="filter"
        type="text"
        value={value}
        onChange={onFilter}
        required={false}
      />
    </FilterContainer>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};
