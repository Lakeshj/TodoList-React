import React from 'react'

export const Footer = () => {
    let footStyle = {
        position: "relative",
        top: "8.7vh",
        width: "100%"
    }
    return (
        <footer className='bg-dark text-light text-center my-2' style={footStyle}>
            <p className='py-3'>
                Copyright &copy; MyTodos.in
            </p>
        </footer>
    )
}
