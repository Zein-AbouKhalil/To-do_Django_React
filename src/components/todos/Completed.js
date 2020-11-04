import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CompletedToDo from "./CompletedToDos";


class Completed extends Component{
    render(){
        return this.props.todos.map((todo) => (todo.completed === true) ?
            <CompletedToDo key={todo.id} todo={todo} markComplete={this.props.markComplete}
                           delTodo={this.props.delTodo}/>
            : ''
        );
    }
}


Completed.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
}

export default Completed;