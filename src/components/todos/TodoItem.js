import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
    getStyle = () => {
        return{
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc doted',
            textDecoration: 'none',
            color: 'Black',
            margin: '0',
        }

    }


    render() {
        const { id, title, description } = this.props.todo;
        return (
            <div className="card text-black border-warning mb-3" >
                <div className="card-header">
                    <div className="form-check">
                        <label className="form-check-label">
                            <input className="form-check-input" type="checkbox"
                                   onChange={this.props.markComplete.bind(this, id)}/> {''}
                            {title}
                        </label>
                        <button type="button" className="btn btn-danger" variant="danger"
                                onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>Delete</button>
                    </div>
                </div>
                <div className="card-body">
                    <p>
                        {description}
                    </p>
                </div>
            </div>

        )
    }
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
};

const btnStyle = {
    background: '#FF3932',
    float: 'right'
}

export default TodoItem;