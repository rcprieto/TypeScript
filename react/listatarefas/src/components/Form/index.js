import React from 'react';
import { FaPlus } from 'react-icons/fa';
import './Form.css';
import PropTypes from 'prop-types';

export default function Form({ handleSubmit, handleChange, novaTarefa }) {
  return (
    <form action="#" onSubmit={handleSubmit} className="form">
      <input type="text" onChange={handleChange} value={novaTarefa} />
      <button type="submit">
        <FaPlus></FaPlus>
      </button>
    </form>);
}

Form.defaultProps = {
  novaTarefa: '',
};

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired,
};
