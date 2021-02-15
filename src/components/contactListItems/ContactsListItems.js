import React, { Component } from 'react';
import './ContactsListItems.css';

export default class ContactsListItems extends Component {
  render() {
    const {
      contact: { name, id, number },
      deleteContact,
    } = this.props;
    return (
      <li className="contact">
        <span>{name}</span>
        <span>{number}</span>
        <button
          className="deleteBtn"
          type="button"
          id={id}
          onClick={e => deleteContact(e.target.id)}
        >
          x
        </button>
      </li>
    );
  }
}
