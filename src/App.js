import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super() //jo class hum dusri class k saath extend krte hain, toh dusri class ki cheezien hamien is class mai chahiye hoti hain, tou woh cheeazien hum jb super k andar call krte hain toh hamien milti hain.
    this.state = {
      todos: [],
      value: ''
    }
  }


  add_todo = () => {
    // this.state.todos.push(this.state.value)
    this.setState ({
      // todos: this.state.todos
      todos: [...this.state.todos,this.state.value], // spread opreator use krke, pehle previous array ko call kareinge phir usme nayi values add krdeinge
      value: '' // todos mai ja kr value add krdega aur phir input ki value empty krdega
    })
    console.log(this.state.value)
  }


  deleteTodo =(index) => {

    this.state.todos.splice(index, 1)
    this.setState ({
      todos: this.state.todos
    })
    
    console.log("Index number"+ " " + index + " " + "deleted")
  }
  

  editTodo = (index) => {
    var updatedValue = prompt("Enter new value:");
    this.state.todos[index] = updatedValue
    this.setState ({
      todos: this.state.todos
    })

    console.log("ready to edit index" + " " + index)
  }




  render() { 
    return (
      <div>
        <input value={this.state.value} onChange={(e)=> this.setState({value: e.target.value})} type="text" placeholder="Enter Value"></input>
        <button onClick={this.add_todo} type="submit" >Add Item</button>
          <ul>
            {this.state.todos.map((v,i)=> {
              return <li key={i}>
                {v}
                <button onClick = {() => this.deleteTodo(i)}>Delete</button>
                <button onClick = {() => this.editTodo(i)}>Edit</button>
              </li>
                
            })
          }
          </ul>
      </div> 
    )
  }
}

export default App;
