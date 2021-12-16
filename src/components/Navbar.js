import { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

class Navbar extends Component {
  render(){
    return (
      <nav>
        <ul>
            <li>
                <Link to="/">
                    <img id="logo" src="https://totoro-facts.com/generated/assets/images/totoro-logo-438-cf0b73.png" alt="Studio Ghibli logo"/>
                </Link>
            </li>
            <li>
                <Link to="/movies">
                    Movies
                </Link>
            </li>
            <li>
                <Link to="/people">
                    People
                </Link>
            </li>
            <li>
                <Link to="/locations">
                    Locations
                </Link>
            </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;