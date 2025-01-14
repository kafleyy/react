import React from 'react'

export const Footer = () => {
    let footerStyle = {
        position: "absolute",
        top: "100vh",
        width: "100%"
    }
    return (
        <footer className="bg-dark text-light" style={footerStyle}>
            <p className="text-center">Copyright &copy; MyTodosList.</p>
        </footer>
    )
}
