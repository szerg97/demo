import React from "react";
import {Link} from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <div className="Nav">
        <nav>
            <h3>Logo</h3>
            <ul className="nav-links">
                <Link to="/about">
                    <li>About</li>
                </Link>
                <Link to="/contact">
                    <li>Contact</li>
                </Link>
                <Link to="/customers">
                    <li>Customers</li>
                </Link>
            </ul>
        </nav>
    </div>
  );
}

export default Nav;