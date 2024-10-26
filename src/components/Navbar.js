import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
function Navbar(props) {
  const [tabState, setTabState] = useState({
    home: "active",
    about: "inactive",
  });
  const HandleClickEvent = (tabName) => {
    if (tabName === "about") {
      setTabState({
        home: "inactive",
        about: "active",
      });
    } else {
      setTabState({
        home: "active",
        about: "inactive",
      });
    }
    //console.log(event);
  };
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link
            className="navbar-brand"
            to="TextUtils"
            onClick={() => HandleClickEvent("home")}
          >
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${tabState.home}`}
                  onClick={() => HandleClickEvent("home")}
                  aria-current="page"
                  to="TextUtils"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${tabState.about}`}
                  onClick={() => HandleClickEvent("about")}
                  to="TextUtils/about"
                >
                  About
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onClick={props.handleMode}
                />
                <label
                  className="form-check-label fw-lighter"
                  style={{
                    color:
                      props.mode.toLowerCase() === "light" ? "black" : "white",
                  }}
                  htmlFor="flexSwitchCheckDefault"
                >
                  Enable{" "}
                  {props.mode.toLowerCase() === "light" ? "Dark" : "Light"} Mode
                </label>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

Navbar.propTypes = {
  title: PropTypes.string,
};
Navbar.defaultProps = {
  title: "Text Utils",
};
