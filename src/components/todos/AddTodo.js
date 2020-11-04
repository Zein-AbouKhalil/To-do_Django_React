import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
    state = {
        title: '',
        description: '',
        redirect: null,
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title, this.state.description, this.state.redirect);
        this.setState({title: '', description: '', redirect: "/Todo"})

    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label className="col-form-label" htmlFor="inputDefault">To Do:</label>
                    <input type="text"
                           className="form-control"
                           name="title"
                           placeholder="Add Todo"
                           value={this.state.title}
                           onChange={this.onChange}/>
                    <label className="col-form-label" htmlFor="inputDefault">Description:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="description"
                        placeholder="Add description ..."
                        value={this.state.description}
                        onChange={this.onChange}
                    />
                </div>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="submit" value="Submit" className="btn btn-secondary">Add Todo</button>
                </div>
            </form>
        )
    }
}

// PropTypes
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default AddTodo