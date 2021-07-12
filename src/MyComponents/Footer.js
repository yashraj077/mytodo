import React from 'react'

export default function Footer() {
    let footercss = {
        position: "fixed",
        left: "0",
        bottom: "0",
        "width": "100%"
    }
    return (
        <footer className="footer mt-auto py-3 bg-dark sticky-footer" style={footercss}>
            <div className="container">
                <div className="container text-center">
                    <span className="text-muted">Todos App Copyright &copy; 2021</span>
                </div>
            </div>
        </footer>
    )
}
