import "./SelectedGenre.scss";
import { useMyContext } from "../../../UseContext";
import { Movie } from "../../../UserInterface";
import { useEffect, useState } from "react";

const SelectedGenre = () => {
  const { selectedGenre, moviesBase } = useMyContext();
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const updatedFilterMovies = moviesBase.filter((item) =>
      item.genre.includes(selectedGenre)
    );
    setFilteredMovies(updatedFilterMovies);
  }, [selectedGenre, moviesBase]);

  return (
    <section className="selected-genre container">
      <div className="selected-genre-title">Films in the selected genre</div>
      {filteredMovies.map((item) => (
        <div className="selectet-movies">
          <div className="movie-poster">
            <img src={item.image} />
          </div>
          <div className="movie-description">
            <p className="movie-title">{item.title}</p>
            <div className="movies-rank-imbdb">
              <p className="rank">{item.rank}</p>
              <p className="imdb">{item.rating}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default SelectedGenre;

