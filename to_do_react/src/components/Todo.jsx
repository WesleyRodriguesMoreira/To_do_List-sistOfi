import React from 'react'

const Todo = ({ todo, removeTodo, completTodo }) => {
  return (
    <div className="todo" style={{ textDecoration: todo.isCompleted ? "line-through" : ""}}>
            <div className="content">
              <p>{todo.text}</p>
              <p className="category">({todo.category})</p>
            </div>

            <div>
              <button className="complete" onClick={() => completTodo(todo.id)}>Completar</button>
              <button className="remove" onClick={() => removeTodo(todo.id)}>X</button>
            </div>
    </div>
  )
}

export default Todo
