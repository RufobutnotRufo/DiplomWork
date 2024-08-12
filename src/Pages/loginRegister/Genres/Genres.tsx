import "./Genres.scss";
import { useMyContext } from "../../../UseContext";
import { useState } from "react";
import { useNavigate } from "react-router";

const Genres = () => {
  const { moviesBase, setSelectedGenre } = useMyContext();
  const allGenres = moviesBase.flatMap((movie) => movie.genre);
  const uniqueGenres = [...new Set(allGenres)];
  const [genres] = useState(uniqueGenres);
  const [showGenresToggle, setShowGenresToggle] = useState(false);
  const navigate = useNavigate();
  

  const showGenres = () => {
    setShowGenresToggle(!showGenresToggle);
  };

  const selectedGenres = (e: any) => {
    setSelectedGenre(e.target.textContent);
    navigate("/Description/Genre"); 
  };

  return (
    <div>
    <section className="genres-section">
      <div className="genres-section-inner container">
        <div className="genres-section-inner-title">
          <h1 className="genres-section-inner-title-text">GENRES</h1>
        </div>
        <div className="genres-section-inner-items">
          <button className="show-genres-btn" onClick={showGenres}>
            SHOW GENRES
          </button>
          {showGenresToggle &&
            genres.map((item, index) => (
              <button key={index} className="genres-item" onClick={(e)=>selectedGenres(e)}>
                {item}
              </button>
            ))}
        </div>
      </div>
 </section>
<div className="block" onClick={()=>navigate("/Sign-Up")}><div>GET A DISCOUNT 1%</div></div>
</div>
  );
};

export default Genres;
