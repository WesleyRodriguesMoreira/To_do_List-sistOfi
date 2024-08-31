import React from 'react'

const TodoForm = () => {
  return(
    <div className='tdo`form'>
      <h2>Criar Tarefa</h2>
      <form>
        <input type="text" placeholder='Digite o título da tarefa'/>
        <select>
            <option value="">Selecione uma categoria</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Casa">Casa</option>
            <option value="Escola">Escola</option>
        </select>
        <button type='submit'>Cria tarefa</button>
      </form>
    </div>
    );
  
};

export default TodoForm
