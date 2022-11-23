import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        // <ul>
        //     <li><Link to="/">Home</Link></li>
        //     <li><Link to="/products">Products</Link></li>
        //     <li><Link to="/posts/2018/06">Posts</Link></li>
        //     <li><Link to="/admin">Admin</Link></li>
        // </ul>


        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Vidly</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item ">
                        < Link className="nav-link" to="/movies">Movies <span className="sr-only">(current)</span></ Link>
                    </li>
                    <li className="nav-item">
                        < Link className="nav-link" to="/customers">Customers</ Link>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="rentals">Rentals</NavLink>
                    </li>
                    
                </ul>
            </div>
        </nav>
    )
}
export default NavBar