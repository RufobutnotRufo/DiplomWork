import { Link } from "react-router-dom";
import BusketSvg from "../assets/busket-svg.svg";
import "./Header.scss";

const Header: React.FC = () => {
  return (
    <header>
      <div className="container">
        <div className="header-inner">
          <ul className="header-menu-nav">
            <li className="header-menu-nav-item">
              <a className="header-menu-nav-item-link">Home</a>
            </li>
            <li className="header-menu-nav-item">
              <a className="header-menu-nav-item-link">Genre</a>
            </li>
            <li className="header-menu-nav-item">
              <a className="header-menu-nav-item-link">Country</a>
            </li>
            <li className="header-menu-nav-item">
              <a className="header-menu-nav-item-link">
                <div className="header-input-search">
                  <input
                    className="input-seacrh"
                    placeholder="Search movies......."
                  />
                </div>
              </a>
            </li>
            <li className="header-menu-nav-item">
              <a className="header-menu-nav-item-link">Movies</a>
            </li>
            <li className="header-menu-nav-item">
              <a className="header-menu-nav-item-link">Series</a>
            </li>
            <li className="header-menu-nav-item">
              <a className="header-menu-nav-item-link">Store</a>
            </li>
            <li className="header-menu-nav-item">
              <a className="header-menu-nav-item-link">
                <Link to="/Sign-Up">
                  <button className="log-in-sign-up-button">
                    Login/Singup
                  </button>
                </Link>
              </a>
            </li>
            <li className="header-menu-nav-item">
              <a className="header-menu-nav-item-link">
                <img className="busket-svg" src={BusketSvg} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
