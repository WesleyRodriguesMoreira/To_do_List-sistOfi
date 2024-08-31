import { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !category) return;

    // Adicionando os valores
    addTodo(title, category);

    // Limpar os campos
    setTitle("");
    setCategory("");

  };

  return (
    <div className='todo-form'>
      <h2>Criar Tarefa</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Digite o título da tarefa" value={title} onChange={(e) => setTitle(e.target.value)}/>

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Selecione uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Casa">Casa</option>
          <option value="Escola">Escola</option>
        </select>
        <button type='submit'>Criar tarefa</button>
      </form>
    </div>
  );
};

export default TodoForm;
