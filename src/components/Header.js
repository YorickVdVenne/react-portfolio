import React from 'react'
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                    <div className="container">
                        <Link to="/" className="navbar-brand text-white">
                            <h1 className="display-4">React Portfolio</h1>
                        </Link>
                    </div>
                </nav>
            </header>
        </div>
    )
}
