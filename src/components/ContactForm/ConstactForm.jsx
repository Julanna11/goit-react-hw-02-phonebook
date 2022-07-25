import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

const InitialState = {
  name: '',
  number: '',
};

class Form extends Component {
  state = { ...InitialState };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  handleChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    //   console.log(this.state);
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ ...InitialState });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form autoComplete="off" onSubmit={this.handleSubmit}>
        <input
          id={nanoid()}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={this.handleChange}
          required
        />
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={this.handleChange}
          required
        />
        <button type="submit">Add Contact</button>
      </form>
    );
  }
}

export default Form;
