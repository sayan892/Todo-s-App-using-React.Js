import React from 'react';

const Todos = ({todos, deleteTodo}) => {

  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="collection-item" key={todo.id}>
         {todo.content} <i className="fas fa-trash"  onClick={() => {deleteTodo(todo.id)}}></i>
        </div>
      )
    })
  ) : (
    <p className="center">You have no todo's left, Add some Todo's!</p>
  );

  return (
    <div className="todos collection">
      {todoList}
    </div>
  )
}

export default Todos;
