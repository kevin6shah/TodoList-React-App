import React, { Component } from 'react'
import TodoItem from './TodoItem'
import AddItem from './AddItem'
import { v4 as uuid } from "uuid";

export class TodoList extends Component {
    state = {
        todos: [
            {
                id: uuid(),
                title: 'This is the first item',
                value: false
            },
            {
                id: uuid(),
                title: 'This is the second item',
                value: false
            },
            {
                id: uuid(),
                title: 'This is the third item',
                value: false
            }
        ],
    }

    handleItemClick = (id) => {
        this.setState({
            todos: this.state.todos.map(element => {
                if (element.id === id) {
                    element.value = !element.value
                }
                return element
            })
        });
    }

    handleDelete = (id) => {
        this.setState({
            todos: [...this.state.todos.filter(todo => todo.id !== id)]
        });
    }

    onAdd = (description) => {
        const newTodo = {
            id: uuid(),
            title: description,
            value: false,
        }
        this.setState({todos: [...this.state.todos, newTodo]})
    }

    render() {
        return (
            <div>
                <AddItem onAdd={this.onAdd}/>
                {this.state.todos.map((element) => {
                    return <TodoItem key={element.id} todo={element} handleItemClick={this.handleItemClick} handleDelete={this.handleDelete}/>;
                })}
            </div>
        )
    }
}

export default TodoList
