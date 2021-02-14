import React, { Component } from 'react';
import style from './ContactForm.module.css';
import PropTypes from 'prop-types';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    const { name } = this.state;
    const { contacts } = this.props;
    const existedContact = contacts.find(contact => contact.name === name);
    if (existedContact) {
      alert(`${name} is already in contacts`);
      return;
    }

    this.props.addContact(this.state.name, this.state.number);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={style.form} onSubmit={this.handleSubmit}>
        <label>
          Name{' '}
          <input
            className={style.input}
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            placeholder="Enter name"
          ></input>
        </label>
        <br />
        <label>
          Number{' '}
          <input
            className={style.input}
            type="text"
            name="number"
            value={number}
            onChange={this.handleChange}
            placeholder="Enter number"
          ></input>
        </label>
        <br />
        <button className={style.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
ContactForm.propTypes = {
  state: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
