import { Link } from "react-router-dom";
import './NavBar.css';

function NavBar() {
    return (
        <nav className="navbar">
            <ul className="navbar-items">
                {/* List of links for each page */}
                <Link to="/" className="navbar-btn">
                    <li>
                        Home
                    </li>
                </Link>
                <Link to="/abbrv" className="navbar-btn">
                    <li>
                        Lingo & File names
                    </li>
                </Link>
                <Link to="/guides" className="navbar-btn">
                    <li>
                        Mod Making Guides
                    </li>
                </Link>
            </ul>
        </nav>
    );
};

export default NavBar;
