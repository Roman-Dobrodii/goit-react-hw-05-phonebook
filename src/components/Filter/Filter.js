import React from 'react';
import style from './Filter.module.css';

export default function Filter({ value, onChangeFilter }) {
  return (
    <div>
      <h4>Find contacts by name </h4>
      <input
        className={style.input}
        type="text"
        value={value}
        onChange={e => onChangeFilter(e.target.value)}
      />
    </div>
  );
}
