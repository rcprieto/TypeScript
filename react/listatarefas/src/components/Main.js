import React, {Component} from 'react';
import { FaPlus } from 'react-icons/fa'
import { FaEdit, FaWindowClose } from 'react-icons/fa'
import './Main.css';


export default class Main extends Component{

  state = {
    novaTarefa: '',
    tarefas: [
      'Fazer Café',
      'Beber Água'
    ],
  };

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  }

  render (){

    const {novaTarefa, tarefas} = this.state;

    return (
      <div className='main'>
      <h1>Lista de Tarefas</h1>
      <form action="#" className="form">
      <input type="text" onChange={this.handleChange} value={novaTarefa} />
      <button type="submit">
        <FaPlus></FaPlus>
      </button>
      </form>
      <ul className="tarefas">
        {tarefas.map((t) => (
          <li key={t}>{t}
          <div>
            <FaEdit className='edit'></FaEdit>
            <FaWindowClose className="delete"></FaWindowClose>
          </div>
          </li>
        ))}
      </ul>
      </div>
    )
  }
}
