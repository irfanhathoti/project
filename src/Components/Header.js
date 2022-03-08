import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-5">
                            <li className="nav-item mx-5">
                                <Link className="nav-link" aria-current="page" to=''>Home</Link>
                            </li>
                            <li className="nav-item mx-5">
                                <Link className="nav-link" to='category/Bollywood' >Bollywood</Link>
                            </li>
                            <li className="nav-item mx-5">
                                <Link className="nav-link" to="category/Technology">Technology</Link>
                            </li>
                            <li className="nav-item mx-5">
                                <Link className="nav-link" to="category/Food">Food</Link>
                            </li>
                            <li className="nav-item mx-5">
                                <Link className="nav-link" to="category/Health">Health</Link>
                            </li>
                            <li className="nav-item mx-5">
                                <Link className="nav-link" to="category/Fittness">Fittness</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
  )
}

export default Header