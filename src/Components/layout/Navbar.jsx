import { Link, useLocation } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import hospitalLogo from "../../assets/images/hospital-logo.png"
import "./navbar.css"

const Navbar = () => {
  const location = useLocation()

  const getActiveClass = (path) => {
    return location.pathname === path ? "active" : ""
  }

  const getNavLinkClass = (path) => {
    const baseClass = "nav-link"
    const activeClass = getActiveClass(path)

    // Add specific color classes based on the path
    let colorClass = ""
    if (path === "/") colorClass = "home"
    else if (path === "/about") colorClass = "about"
    else if (path === "/impact") colorClass = "impact"
    else if (path === "/gallery") colorClass = "gallery"
    else if (path === "/campaigns-center") colorClass = "campaign"
    else if (path === "/notice") colorClass = "notice"

    return `${baseClass} ${colorClass} ${activeClass}`
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src={hospitalLogo || "/placeholder.svg"}
            alt="HRDC Karnali Province"
            height="45"
            className="d-inline-block align-top"
          />
          <span className="hospital-name ms-2 d-none d-sm-inline">HRDC Karnali</span>
        </Link>

        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-content-wrapper d-flex flex-column flex-lg-row justify-content-between align-items-lg-center w-100">
            <ul className="navbar-nav nav-links">
              <li className="nav-item">
                <Link to="/" className={getNavLinkClass("/")}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className={getNavLinkClass("/about")}>
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/impact" className={getNavLinkClass("/impact")}>
                  Our Impact
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/gallery" className={getNavLinkClass("/gallery")}>
                  Gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/campaigns-center" className={getNavLinkClass("/campaigns-center")}>
                  Campaign Center
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/notice" className={getNavLinkClass("/notice")}>
                  Notice
                </Link>
              </li>
            </ul>

            <div className="auth-buttons mt-3 mt-lg-0">
              <Link to="/login" className={`login-btn me-2 ${getActiveClass("/login")}`}>
                Login
              </Link>
              <Link to="/signup" className={`signup-btn ${getActiveClass("/signup")}`}>
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
