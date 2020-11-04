import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import Todos from './components/todos/Todos';
import Completed from "./components/todos/Completed";
import AddTodo from './components/todos/AddTodo';
import Header from './components/layout/Header'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        todos: []
    };
  }

    refreshList = () => {
        axios
            .get("http://localhost:8000/api/todos/")
            .then(res => this.setState({ todos: res.data }))
            .catch(err => console.log(err));
    };

    componentDidMount() {
        axios
            .get("http://localhost:8000/api/todos/")
            .then(res => this.setState({ todos: res.data }));
    }

  // Toggle Complete
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  // Delete Todo
  delTodo = id => {
    axios.delete(`http://localhost:8000/api/todos/${id}`).then(res =>
        this.setState({
          todos: [...this.state.todos.filter(todo => todo.id !== id)]
        })
    );
  };

  // Add Todo
    addTodo = (title, description) => {
        axios.post('http://localhost:8000/api/todos/', {
            title: title,
            description: description,
            completed: false
        })
            .then(res =>{ this.setState({todos: [...this.state.todos, res.data]})});
    }

    markComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                    axios.put(`http://localhost:8000/api/todos/${id}/`, {
                        title: todo.title,
                        description: todo.description,
                        completed: todo.completed
                    })
                }
                return todo;
            })
        });
    };

  render() {
    return (
        <Router>
          <div className="App">
            <div className="container">
                <Header/>
                <Route exact path="/Todo" render={props => (
                    <React.Fragment>
                        <div className="card text-black bg-warning mb-3" >
                            <div className="card-header">Your current To-dos {this.state.username}</div>
                        </div>
                        <Todos todos={this.state.todos}  markComplete={this.markComplete}
                               delTodo={this.delTodo}/>
                    </React.Fragment>
                )} />
                <Route exact path="/Completed" render={props => (
                    <React.Fragment>
                        <div className="card text-black bg-success mb-3" >
                            <div className="card-header">Your completed To-dos</div>
                        </div>
                        <Completed todos={this.state.todos}  markComplete={this.markComplete}
                                   delTodo={this.delTodo}/>
                    </React.Fragment>
                )} />
                <Route exact path="/AddTodo" render={props => (
                    <React.Fragment>
                        <div className="card text-black bg-primary mb-3" >
                            <div className="card-header">To add a To-do</div>
                        </div>
                        <AddTodo addTodo={this.addTodo}/>
                    </React.Fragment>
                )} />
            </div>
          </div>
        </Router>

    );
  }
}

export default App;