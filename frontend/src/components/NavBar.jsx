import { NavLink, Link } from "react-router-dom"
import "../css/Navbar.css"

function NavBar() {
    return <nav className="navbar">
        <div className="navbar-container">
            <div className="navbar-brand">
                <Link to="/">🎬 MovieApp</Link>
            </div>
            <div className="navbar-links">
                <NavLink to="/" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
                <NavLink to="/favorites" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Favorites</NavLink>
            </div>
        </div>
    </nav>
}

export default NavBar