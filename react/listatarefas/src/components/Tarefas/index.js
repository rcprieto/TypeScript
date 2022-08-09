import React from 'react';
import { FaEdit, FaWindowClose } from 'react-icons/fa';
import './Tarefas.css';
import PropTypes from 'prop-types';


export default function Tarefas({ handleEdit, handleDelete, tarefas }) {
  return (
    <ul className="tarefas">
      {tarefas.map((t, index) => (
        <li key={t}>{t}
          <span>
            <FaEdit className='edit' onClick={(e) => handleEdit(e, index)}></FaEdit>
            <FaWindowClose className="delete" onClick={(e) => handleDelete(e, index)}></FaWindowClose>
          </span>
        </li>
      ))}
    </ul>
  );
}
Tarefas.defaultProps = {
  tarefas: [],
};
Tarefas.propTypes = {
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  tarefas: PropTypes.array.isRequired,
};
