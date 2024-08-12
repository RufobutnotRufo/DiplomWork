import "./Movies.scss";
import { useMyContext } from "../../../UseContext";
import { useNavigate } from "react-router";
import { useState } from "react";

const Movies = () => {
  const { moviesBase, setDescriptionData, setSelectedGenre } = useMyContext();
  const navigate = useNavigate();

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedMovies = moviesBase.slice(startIndex, endIndex);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const getItemToDesc = (movieId: string) => {
    const movieItem = moviesBase.find((item) => item.id === movieId);
    setDescriptionData(movieItem);
    navigate("/Description");
  };

  const getItemTextContentForFilter = (e: any) => {
    setSelectedGenre(e.target.textContent);
    navigate("/Description/Genre");
  };

  const pageCount = Math.ceil(moviesBase.length / itemsPerPage);

  return (
    <section className="movies">
      <div className="movies-section container">
        <div className="movies-header">
          <h1 className="movies-title">MOVIES</h1>
        </div>
        <div className="movies-list">
          {paginatedMovies.map((item) => (
            <div className="movie-card" key={item.id}>
              <div
                className="movie-poster"
                onClick={() => getItemToDesc(item.id)}
              >
                <img
                  className="movie-image"
                  src={item.big_image}
                  alt={item.title}
                />
              </div>
              <div className="movie-details">
                <h4 className="movie-name">{item.title}</h4>
                <p className="movie-description">{item.description}</p>
                <ul className="movie-genres">
                  {item.genre.map((genre) => (
                    <li
                      className="movie-genre"
                      key={genre}
                      onClick={(e) => getItemTextContentForFilter(e)}
                    >
                      {genre}
                    </li>
                  ))}
                </ul>
                <p className="movie-rating">RANK: {item.rank}</p>
                <p className="movie-year">YEAR: {item.year}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="pagination">
          <button className="pagination-btn"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {[...Array(pageCount).keys()].map((page) => (
            <button 
              key={page + 1}
              onClick={() => handlePageChange(page + 1)}
              className={currentPage === page + 1 ? "active" : ""}
            >
              {page + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === pageCount}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Movies;
