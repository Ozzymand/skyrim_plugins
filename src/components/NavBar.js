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
			</ul>
		</nav>
	)
};

export default NavBar;
