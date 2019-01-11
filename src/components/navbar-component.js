import React, {Component} from "react";
import AppBar from '@material-ui/core/AppBar';
import {Link} from "react-router-dom";
import "../styles/navbar.css";

class NavbarComponent extends Component {
  render() {
    return (
        <AppBar>
          <nav className="navbar">
            <ul className="navbar__list">
              <li className="navbar__list-item">
                <Link className="navbar__list-item-link" to="/">Home</Link>
              </li>
            </ul>
          </nav>
        </AppBar>
    );
  }
}


export default NavbarComponent;
