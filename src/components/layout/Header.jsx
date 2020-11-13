import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
    const linkStyle = {
        padding: '0px 5px',
        color: 'white',
        textDecoration: 'none',
    }

    return (
        <React.Fragment>
            <div style={{
                textAlign: 'center',
                backgroundColor: '#333',
                padding: '20px',
                color: 'white',
            }}>
                <h1 style={{
                    fontWeight: '600',
                    fontSize: '30px',
                }}>Todo List</h1>
                <Link style={linkStyle} to='/'>Home</Link>|
                <Link style={linkStyle} to='/about'>About</Link>
            </div>
        </React.Fragment>
    )
}
