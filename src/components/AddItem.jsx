import React, { Component } from 'react'

export default class AddItem extends Component {
    state = {
        description: '',
    }

    updateDescription = (e) => {
        this.setState({
            description: e.target.value,
        })
    }

    onAdd = (e) => {
        e.preventDefault()
        
        this.setState({
            description: '',
        })

        this.props.onAdd(this.state.description)
    }

    render() {
        return (
            <div style={{ 
                paddingTop: '10px',
                paddingBottom: '5px',
            }}>
                <form onSubmit={this.onAdd} style={{display: 'flex'}}>
                <input style={{
                        padding: '5px',
                        flex: 5,
                }} onChange={this.updateDescription}
                   value={this.state.description} placeholder='List Item Description' />
                    <input type="submit"
                        style={{
                    flex: 1,
                    padding: '5px',
                    backgroundColor: 'dimgray',
                    color: 'white',
                    }} value='Add Item'/>
                </form>
            </div>
        )
    }
}
