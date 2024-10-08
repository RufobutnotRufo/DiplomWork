import "./HeroSlider.scss";
import { Movie } from "../UserInterface";
import { useState } from "react";
import { useMyContext } from "../UseContext";
import { useNavigate } from "react-router";

const HeroSlider = () => {
  const [popularMovies] = useState<Movie[]>([
    {
      rank: 1,
      title: "The Shawshank Redemption",
      description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      image:
        "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,1,380,562_.jpg",
      big_image:
        "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@",
      genre: ["Drama"],
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY67_CR0,0,45,67_AL_.jpg",
      rating: "9.3",
      id: "top1",
      year: 1994,
      imdbid: "tt0111161",
      imdb_link: "https://www.imdb.com/title/tt0111161",
    },
    {
      rank: 2,
      title: "The Godfather",
      description:
        "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
      image:
        "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR8,0,380,562_.jpg",
      big_image:
        "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR8,0,380,562_.jpg",
      genre: ["Crime", "Drama"],
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR1,0,45,67_AL_.jpg",
      rating: "9.2",
      id: "top2",
      year: 1972,
      imdbid: "tt0068646",
      imdb_link: "https://www.imdb.com/title/tt0068646",
    },
    {
      rank: 3,
      title: "The Dark Knight",
      description:
        "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      image:
        "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      big_image:
        "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      genre: ["Action", "Crime", "Drama"],
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX67_CR0,0,67,98_AL_.jpg",
      rating: "9.0",
      id: "top3",
      year: 2008,
      imdbid: "tt0468569",
      imdb_link: "https://www.imdb.com/title/tt0468569",
    },
    {
      rank: 4,
      title: "The Godfather Part II",
      description:
        "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
      image:
        "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR7,0,380,562_.jpg",
      big_image:
        "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR7,0,380,562_.jpg",
      genre: ["Crime", "Drama"],
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR1,0,45,67_AL_.jpg",
      rating: "9.0",
      id: "top4",
      year: 1974,
      imdbid: "tt0071562",
      imdb_link: "https://www.imdb.com/title/tt0071562",
    },
    {
      rank: 5,
      title: "12 Angry Men",
      description:
        "The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.",
      image:
        "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_QL75_UX380_CR0,11,380,562_.jpg",
      big_image:
        "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_QL75_UX380_CR0,11,380,562_.jpg",
      genre: ["Crime", "Drama"],
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX45_CR0,0,45,67_AL_.jpg",
      rating: "9.0",
      id: "top5",
      year: 1957,
      imdbid: "tt0050083",
      imdb_link: "https://www.imdb.com/title/tt0050083",
    },
    {
      rank: 6,
      title: "Schindler's List",
      description:
        "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
      image:
        "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,4,380,562_.jpg",
      big_image:
        "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,4,380,562_.jpg",
      genre: ["Biography", "Drama", "History"],
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX45_CR0,0,45,67_AL_.jpg",
      rating: "9.0",
      id: "top6",
      year: 1993,
      imdbid: "tt0108052",
      imdb_link: "https://www.imdb.com/title/tt0108052",
    },
    {
      rank: 7,
      title: "The Lord of the Rings",
      description:
        "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
      image:
        "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      big_image:
        "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      genre: ["Action", "Adventure", "Drama"],
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR0,0,45,67_AL_.jpg",
      rating: "9.0",
      id: "top7",
      year: 2003,
      imdbid: "tt0167260",
      imdb_link: "https://www.imdb.com/title/tt0167260",
    },
    {
      rank: 8,
      title: "Pulp Fiction",
      description:
        "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      image:
        "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR3,0,380,562_.jpg",
      big_image:
        "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR3,0,380,562_.jpg",
      genre: ["Crime", "Drama"],
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR0,0,45,67_AL_.jpg",
      rating: "8.9",
      id: "top8",
      year: 1994,
      imdbid: "tt0110912",
      imdb_link: "https://www.imdb.com/title/tt0110912",
    },
    {
      rank: 9,
      title: "The Lord of the Rings",
      description:
        "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
      image:
        "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_QL75_UX380_CR0,1,380,562_.jpg",
      big_image:
        "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@",
      genre: ["Action", "Adventure", "Drama"],
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UY67_CR0,0,45,67_AL_.jpg",
      rating: "8.8",
      id: "top9",
      year: 2001,
      imdbid: "tt0120737",
      imdb_link: "https://www.imdb.com/title/tt0120737",
    },
    {
      rank: 10,
      title: "The Good, the Bad and the Ugly",
      description:
        "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
      image:
        "https://m.media-amazon.com/images/M/MV5BNjJlYmNkZGItM2NhYy00MjlmLTk5NmQtNjg1NmM2ODU4OTMwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
      big_image:
        "https://m.media-amazon.com/images/M/MV5BNjJlYmNkZGItM2NhYy00MjlmLTk5NmQtNjg1NmM2ODU4OTMwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
      genre: ["Adventure", "Western"],
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BNjJlYmNkZGItM2NhYy00MjlmLTk5NmQtNjg1NmM2ODU4OTMwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX45_CR0,0,45,67_AL_.jpg",
      rating: "8.8",
      id: "top10",
      year: 1966,
      imdbid: "tt0060196",
      imdb_link: "https://www.imdb.com/title/tt0060196",
    },
  ]);
  const navigate = useNavigate();

  const { setDescriptionData } = useMyContext();

  const getItemToDescription = (itemId: any) => {
    const movie = popularMovies.find((item) => item.id === itemId);
    setDescriptionData(movie);
    navigate("/Description");
  };

  return (
    <div className="grid-card container">
      {popularMovies.map((item) => (
        <div
          className="card-item"
          key={item.id}
          onClick={() => getItemToDescription(item.id)}
        >
          <div className="wrapper-image">
            <div className="image-16-9">
              <img className="image-ratio" src={item.image} alt="thumbnail" />
            </div>
          </div>
          <div className="transcoding">
            <div className="transcoding-inner">
              <span>{item.title}</span>
            </div>
          </div>
          <div className="card-overlay">
            <div className="card-info">
              <div className="card-info-body">
                <div className="info-description">
                  <h2>{item.genre}</h2>
                  <p>{item.rating}</p>
                  <p>
                    <strong>Year:</strong> {item.year}
                  </p>
                  <ul className="list-label">
                    <li className="label">
                      <strong>2019</strong>
                    </li>
                    <li className="label-separated">|</li>
                    <li className="label">
                      <strong>Season:</strong> 5 (17 episodes)
                    </li>
                    <li className="label-separated">|</li>
                    <li className="label">25m</li>
                  </ul>
                </div>
                <a className="info-menu" href="#">
                  <i className="fas fa-ellipsis-v"></i>
                </a>
              </div>
              <div className="card-info-footer">
                <a className="preview" href="#">
                  <i className="fas fa-play"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroSlider;
