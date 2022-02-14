import React from 'react';
import PropTypes from 'prop-types';

export default function Header(props) {
    let HeadStyle = {
        color: "white"
    }
    return (
        <div>
            <nav className="bg-dark navbar navbar-expand-lg navbar-light bg-light px-4" style={HeadStyle}>
                <div className="container-fluid">
                    <a className="text-light navbar-brand" href="#">{props.tittle}</a>
                    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className=" nav-item">
                                <a className="text-light nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className=" nav-item">
                                <a className="text-light nav-link" href="#">About</a>
                            </li>
                        </ul>
                         { props.searchBar?                    
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> : " "}
                    </div>
                </div>
            </nav>
        </div>
    )
}

Header.defaultProps = {
    tittle: "TODOS List" 
}

Header.propTypes = {
    tittle: PropTypes.string 
 
}