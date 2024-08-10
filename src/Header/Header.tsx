import { Link } from "react-router-dom";
import BusketSvg from "../assets/busket-svg.svg";
import "./Header.scss";
import { useMyContext } from "../UseContext";
import { useState } from "react";

const Header: React.FC = () => {
  const { userData } = useMyContext();
  const [seacrhMenuToggle,setSeacrhMenuToggle] = useState(false);


  const searchModalTogleOpen = () =>{
    setSeacrhMenuToggle(true)
  }
  const searchModalTogleClose = () =>{
    setSeacrhMenuToggle(false)
  }

  return (
    <header>
      <div className="container">
        <div className="header-inner">
          <ul className="header-menu-nav">
            <li className="header-menu-nav-item">
              <Link className="header-menu-nav-item-link" to="/">
                Home
              </Link>
            </li>
            <li className="header-menu-nav-item">
              <Link to="/Genres" className="header-menu-nav-item-link">
                Genre
              </Link>
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
                    onFocus={()=> searchModalTogleOpen()}
                    onBlur={()=>searchModalTogleClose()}
                  />
                  {seacrhMenuToggle ? <div className="toggle-menu-seacrh">
                    <div className="toggle-menu-seacrh-items">
                      <div className="seacrh-menu-poster">
                        <img className="poster-img-search" />
                      </div>
                      <div className="seacrh-menu-text-content">
                        <p className="seacrh-menu-text-content-title">1</p>
                        <p className="seacrh-menu-text-content-rank">2</p>
                        <p className="seacrh-menu-text-content-rank-genre">3</p>
                        <p className="seacrh-menu-text-content-rank-desc">3</p>
                      </div>
                    </div>
                  </div> : '' }
                </div>
              </a>
            </li>
            <li className="header-menu-nav-item">
              <a className="header-menu-nav-item-link">Movies</a>
            </li>
            <li className="header-menu-nav-item">
              <a className="header-menu-nav-item-link">
                Watch<span className="watch-later-style">Later</span>
              </a>
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
