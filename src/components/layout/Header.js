import React from 'react';



function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="todo">To-do List</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02"
                    aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor02">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="todo">To-dos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="completed">Completed</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="addtodo">Add To-do</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}



export default Header;

