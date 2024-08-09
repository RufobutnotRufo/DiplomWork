import { Link } from "react-router-dom";
import BusketSvg from "../assets/busket-svg.svg";
import "./Header.scss";
import { useMyContext } from "../UseContext";

const Header: React.FC = () => {
  const { userData } = useMyContext();

  return (
    <header>
      <div className="container">
        <div className="header-inner">
          <ul className="header-menu-nav">
            <li className="header-menu-nav-item">
              <Link className="header-menu-nav-item-link" to='/'>Home</Link>
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
              <a className="header-menu-nav-item-link">Watch<span className="watch-later-style">Later</span></a>
            </li>
            <li className="header-menu-nav-item">
              <a className="header-menu-nav-item-link">Store</a>
            </li>
            <li className="header-menu-nav-item">
              <Link to="/Sign-Up" className="header-menu-nav-item-link">
                <button className="log-in-sign-up-button">
                  {userData && userData.name
                    ? `Welcome, ${userData.name}`
                    : "Login/Signup"}
                </button>
              </Link>
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
