import React from 'react';
import './FindContactInput.css';

export default function FindContactInput({ value, onChangeFilter }) {
  return (
    <div className="findInputFrame">
      <label>
        <input
          className="input"
          type="text"
          value={value}
          onChange={e => onChangeFilter(e.target.value)}
        ></input>
      </label>
    </div>
  );
}
