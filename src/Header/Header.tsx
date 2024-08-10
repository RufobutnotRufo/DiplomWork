import { Link } from "react-router-dom";
import BusketSvg from "../assets/busket-svg.svg";
import "./Header.scss";
import { useMyContext } from "../UseContext";
import { useState } from "react";
import { Movie } from "../UserInterface";

const Header: React.FC = () => {
  const { userData, moviesBase } = useMyContext();
  const [seacrhMenuToggle, setSeacrhMenuToggle] = useState<boolean>(false);
  const [seacrhInputValue, setSearchInputValue] = useState<string>("");
  const [seacrhetDatas, setSeacrhetDatas] = useState<Movie[]>([]);

  const searchModalTogleOpen = () => {
    setSeacrhMenuToggle(true);
  };
  const searchModalTogleClose = () => {
    setSeacrhMenuToggle(false);
  };

  const getSearchInputValue = (e: any) => {
    setSearchInputValue(e.target.value);

    const filtredMovies = moviesBase.filter((item) => {
      const searchValue = seacrhInputValue.toLowerCase();
      return (
        item.description.toLowerCase().includes(searchValue) ||
        item.title.toLowerCase().includes(searchValue) ||
        item.year.toString().includes(searchValue) ||
        item.genre.forEach((genres) => genres.includes(searchValue))
      );
    });
    setSeacrhetDatas(filtredMovies);
  };

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
                    onFocus={() => searchModalTogleOpen()}
                    onBlur={() => searchModalTogleClose()}
                    onChange={getSearchInputValue}
                  />
                  {seacrhMenuToggle ? (
                    <div className="toggle-menu-seacrh">
                      {seacrhetDatas.map((item) => (
                        <div className="toggle-menu-seacrh-items">
                          <div className="seacrh-menu-poster">
                            <img
                              className="poster-img-search"
                              src={item.image}
                            />
                          </div>
                          <div>
                            <p className="poster-img-search-title">
                              {item.title}
                            </p>
                            <p className="poster-img-search-title-desc">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    ""
                  )}
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
