import React, { Component } from 'react';
import style from './ContactList.module.css';
import PropTypes from 'prop-types';

export default class ContactList extends Component {
  render() {
    const { contacts, deleteContact } = this.props;

    return (
      <ul className={style.list}>
        {contacts.map(({ id, name, number }) => (
          <li className={style.items} key={id}>
            {name} : {number}
            <button
              className={style.button}
              type="button"
              id={id}
              onClick={e => deleteContact(e.target.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
