import React from 'react';
import './App.css';
const Todo=() => {
  const [todos,setTodos] = React.useState([])
  const [todo,setTodo] = React.useState('')
 
  React.useEffect(() => {
   const tp2 = localStorage.getItem('todos')
   const loadedTodos = JSON.parse(tp2)
     if(loadedTodos){
       setTodos(loadedTodos)
     }
  },[])

  React.useEffect(() => {
    const temp = JSON.stringify(todos)
    localStorage.setItem('todos',temp)
  },[todos])

  //Add Functionality
function handleSubmit(e){
  e.preventDefault()

  const newTodo = {
    id:Math.random(),
    text:todo
  }
  setTodos([...todos].concat(newTodo))
  setTodo('')
}
 // Delete Functionality
function deleteTodo(id){
  const updatedTodo = [...todos].filter((todo) => todo.id !== id)
  setTodos(updatedTodo)
}
    return (

      
        <div className="todo-app container">
        <h4 className="center blue-text">What's your plan Today?</h4>
     
    
      
      {todos.map((todo) => 
    
    <div className="collection-item" key={todo.id}>
     {todo.text} <i className="fas fa-trash"  onClick={() => {deleteTodo(todo.id)}}></i>
    </div>)}
      <form onSubmit={handleSubmit}>
          <label>Add new Todo:</label>
          <input type="text"  onChange={(e) => setTodo(e.target.value)} value={todo} autocomplete="off" required></input>
         <div className="center-align"><button class="btn waves-effect waves-light center-align" type="submit" >Add</button></div> 
         
      </form>
  </div>
  
    
    )
}
export default Todo
