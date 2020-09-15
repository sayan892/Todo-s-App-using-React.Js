import React,{Component} from 'react';
class AddTodo extends Component{
    state={
        content:''
    }
    handleChange = (e) => {
        this.setState({content:e.target.value})
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content:''
        })
    }
  
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add new Todo:</label>
                    <input type="text" name="inp" onChange={this.handleChange} value={this.state.content} required></input>
                   <div className="center-align"><button class="btn waves-effect waves-light center-align" type="submit" >Add</button></div> 
                   
                </form>
            </div>
        )
    }
}
export default AddTodo