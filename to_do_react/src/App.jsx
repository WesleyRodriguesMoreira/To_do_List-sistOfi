import { useState } from 'react';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import Search from './components/Search';
import Filter from './components/Filter';
import './App.css';


function App() {
  // Dados para visualização | cria um arry em formato de JSON
  const [todos, setTodos] = useState([
    {
      id:1,
      text: "Criar funcionalidade x no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id:2,
      text: "Ir pra academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id:3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    }
  ]);

  // Pesquisa tarefas, Filtragem e Ordenação
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");

  // Cadastra novas tarefas | se dar o reload na página, os dados somem
  const addTodo = (text, category) => {
    const newTodos = [...todos, 
      {
        id: Math.floor(Math.random() * 1000),
        text, 
        category,
        isCompleted: false,
      },
    ];

    setTodos(newTodos);
  };

  // Deleta as tarefas com base no id
  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodo = newTodos.filter(todo => todo.id !== id ? todo : null);
    setTodos(filteredTodo);
  };

  // Completa a tarefa | muda o estilo/css
  const completTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo);
    setTodos(newTodos);
  }

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      {/* Pesquisa de Tarefas */}
      <Search search={search} setSearch={setSearch}/>

      {/* Filtragem e Ordenação */}
      <Filter filter={filter} setFilter={setFilter} setSort={setSort}/>

      {/* Lista com as tarefas */}
      <div className="todo_list">
        {todos
        // Filtragem por status | Todas, Completas e Incompletas
        .filter((todo) => filter === "All" ? true : filter === "Completed" ? todo.isCompleted : !todo.isCompleted)
        // Ordenação por ordem alfabetica
        .sort((a, b) => sort === "Asc" ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text))
        // Busca por tarefas | utiliza um input de pesquisa
        .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()))
        // Mapea todas as tarefas criando a chave única (id)
        .map((todo) => (<Todo key={todo.id} todo = {todo} removeTodo={removeTodo} completTodo={completTodo}/>))
        }
      </div>

      {/* Formulário de cadastro */}
      <TodoForm addTodo={addTodo}/>
    </div>
  )
}

export default App
