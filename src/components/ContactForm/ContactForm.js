import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import './ContactForm.css';
import PropTypes from 'prop-types';

export default class ContactForm extends Component {
  formInitialState = {
    name: '',
    number: '',
  };
  state = {
    ...this.formInitialState,
    alertMessageShow: false,
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
      this.setState({ alertMessageShow: true });
      return this.setState({ ...this.formInitialState });
    }

    this.props.addContact(this.state.name, this.state.number);
    this.setState({ name: '', number: '' });
  };
  toggleAlert = () => {
    this.setState({ alertMessageShow: false });
  };
  render() {
    const { name, number, alertMessageShow } = this.state;

    return (
      <section className="wrapper">
        <CSSTransition
          in={alertMessageShow}
          timeout={250}
          classNames="alertFade"
          unmountOnExit
        >
          <button className="alertMessage" onClick={this.toggleAlert}>
            <p>Contact already exists</p>
          </button>
        </CSSTransition>
        <form onSubmit={this.handleSubmit} className="form">
          <label>
            Name
            <input
              className="input"
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              placeholder="Enter name"
            ></input>
          </label>
          <label>
            Number
            <input
              className="input"
              type="tel"
              value={number}
              onChange={this.handleChange}
              name="number"
              placeholder="Enter number"
            ></input>
          </label>
          <button type="submit" className="addContactButton">
            Add contact
          </button>
        </form>
      </section>
    );
  }
}

ContactForm.propTypes = {
  state: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
