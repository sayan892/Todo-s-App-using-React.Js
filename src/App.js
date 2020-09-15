import React, { Component } from 'react';
import Todos from './Todos'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AddTodo from './Addform';
import './App.css';
class App extends Component {
  state = {
    todos: []
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    });
  }
  addTodo = (todo) => {
        todo.id= Math.random();
        let todos = [...this.state.todos,todo]
        this.setState({todos})
  }
  render() {
    return (
      <div className="todo-app container">
        <h4 className="center blue-text">What's your plan Today?</h4>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
