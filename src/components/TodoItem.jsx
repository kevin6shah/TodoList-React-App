import React, { Component } from 'react'

export class TodoItem extends Component {
    render() {
        const todo = this.props.todo;

        return (
            <div style={{
                fontFamily: 'Helvetica',
                textDecoration: (todo.value) ? 'line-through' : 'none',
                padding: 10,
                margin: 5,
                backgroundColor: 'lightGrey',
            }}>
                <input type='checkbox' onChange={this.props.handleItemClick.bind(this, todo.id)}/>
                {'  ' + todo.title}
                <div style={{
                    float: 'right',
                    backgroundColor: 'red',
                    color: 'white',
                    padding: '2px 6px',
                    borderRadius: 50,
                    cursor: 'pointer',
                }} onClick={this.props.handleDelete.bind(this, todo.id)}>×</div>
            </div>
        )
    }
}

export default TodoItem
