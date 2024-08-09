import "./RecentlyUpdated.scss";
import { useState } from "react";
import { useMyContext } from "../UseContext";

const RecentlyUpdated = () => {
  const [updatedMovies] = useState([
    {
      rank: 81,
      title: "Capernaum",
      description:
        "While serving a five-year sentence for a violent crime, a 12-year-old boy sues his parents for neglect.",
      image:
        "https://m.media-amazon.com/images/M/MV5BY2Y3OWNkMTctYzNjYS00NWVkLTg4OWEtY2YxN2I3NDhlYzE0XkEyXkFqcGdeQXVyMTI3ODAyMzE2._V1_QL75_UY562_CR7,0,380,562_.jpg",
      big_image:
        "https://m.media-amazon.com/images/M/MV5BY2Y3OWNkMTctYzNjYS00NWVkLTg4OWEtY2YxN2I3NDhlYzE0XkEyXkFqcGdeQXVyMTI3ODAyMzE2._V1_QL75_UY562_CR7,0,380,562_.jpg",
      genre: ["Drama"],
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BY2Y3OWNkMTctYzNjYS00NWVkLTg4OWEtY2YxN2I3NDhlYzE0XkEyXkFqcGdeQXVyMTI3ODAyMzE2._V1_UY67_CR1,0,45,67_AL_.jpg",
      rating: "8.4",
      id: "top81",
      year: 2018,
      imdbid: "12",
      imdb_link: "https://www.imdb.com/title/tt8267604",
    },
    {
      rank: 82,
      title: "Come and See",
      description:
        "After finding an old rifle, a young boy joins the Soviet resistance movement against ruthless German forces and experiences the horrors of World War II.",
      image:
        "https://m.media-amazon.com/images/M/MV5BODM4Njg0NTAtYjI5Ny00ZjAxLTkwNmItZTMxMWU5M2U3M2RjXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,10,380,562_.jpg",
      big_image:
        "https://m.media-amazon.com/images/M/MV5BODM4Njg0NTAtYjI5Ny00ZjAxLTkwNmItZTMxMWU5M2U3M2RjXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,10,380,562_.jpg",
      genre: ["Drama", "Thriller", "War"],
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BODM4Njg0NTAtYjI5Ny00ZjAxLTkwNmItZTMxMWU5M2U3M2RjXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX100_CR0,3,100,148_.jpg",
      rating: "8.4",
      id: "top82",
      year: 1985,
      imdbid: "11",
      imdb_link: "https://www.imdb.com/title/tt0091251",
    },
    {
      rank: 83,
      title: "Toy Story",
      description:
        "A cowboy doll is profoundly threatened and jealous when a new spaceman action figure supplants him as top toy in a boy's bedroom.",
      image:
        "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_QL75_UX380_CR0,2,380,562_.jpg",
      big_image:
        "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_QL75_UX380_CR0,2,380,562_.jpg",
      genre: ["Animation", "Adventure", "Comedy"],
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_UX45_CR0,0,45,67_AL_.jpg",
      rating: "8.3",
      id: "top83",
      year: 1995,
      imdbid: "10",
      imdb_link: "https://www.imdb.com/title/tt0114709",
    },
    {
      rank: 84,
      title: "American Beauty",
      description:
        "A sexually frustrated suburban father has a mid-life crisis after becoming infatuated with his daughter's best friend.",
      image:
        "https://m.media-amazon.com/images/M/MV5BNTBmZWJkNjctNDhiNC00MGE2LWEwOTctZTk5OGVhMWMyNmVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      big_image:
        "https://m.media-amazon.com/images/M/MV5BNTBmZWJkNjctNDhiNC00MGE2LWEwOTctZTk5OGVhMWMyNmVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      genre: ["Drama"],
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BNTBmZWJkNjctNDhiNC00MGE2LWEwOTctZTk5OGVhMWMyNmVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY67_CR0,0,45,67_AL_.jpg",
      rating: "8.3",
      id: "top84",
      year: 1999,
      imdbid: "9",
      imdb_link: "https://www.imdb.com/title/tt0169547",
    },
    {
      rank: 81,
      title: "Capernaum",
      description:
        "While serving a five-year sentence for a violent crime, a 12-year-old boy sues his parents for neglect.",
      image:
        "https://m.media-amazon.com/images/M/MV5BY2Y3OWNkMTctYzNjYS00NWVkLTg4OWEtY2YxN2I3NDhlYzE0XkEyXkFqcGdeQXVyMTI3ODAyMzE2._V1_QL75_UY562_CR7,0,380,562_.jpg",
      big_image:
        "https://m.media-amazon.com/images/M/MV5BY2Y3OWNkMTctYzNjYS00NWVkLTg4OWEtY2YxN2I3NDhlYzE0XkEyXkFqcGdeQXVyMTI3ODAyMzE2._V1_QL75_UY562_CR7,0,380,562_.jpg",
      genre: ["Drama"],
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BY2Y3OWNkMTctYzNjYS00NWVkLTg4OWEtY2YxN2I3NDhlYzE0XkEyXkFqcGdeQXVyMTI3ODAyMzE2._V1_UY67_CR1,0,45,67_AL_.jpg",
      rating: "8.4",
      id: "top81",
      year: 2018,
      imdbid: "8",
      imdb_link: "https://www.imdb.com/title/tt8267604",
    },
    {
      rank: 82,
      title: "Come and See",
      description:
        "After finding an old rifle, a young boy joins the Soviet resistance movement against ruthless German forces and experiences the horrors of World War II.",
      image:
        "https://m.media-amazon.com/images/M/MV5BODM4Njg0NTAtYjI5Ny00ZjAxLTkwNmItZTMxMWU5M2U3M2RjXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,10,380,562_.jpg",
      big_image:
        "https://m.media-amazon.com/images/M/MV5BODM4Njg0NTAtYjI5Ny00ZjAxLTkwNmItZTMxMWU5M2U3M2RjXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,10,380,562_.jpg",
      genre: ["Drama", "Thriller", "War"],
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BODM4Njg0NTAtYjI5Ny00ZjAxLTkwNmItZTMxMWU5M2U3M2RjXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX100_CR0,3,100,148_.jpg",
      rating: "8.4",
      id: "top82",
      year: 1985,
      imdbid: "7",
      imdb_link: "https://www.imdb.com/title/tt0091251",
    },
    {
      rank: 83,
      title: "Toy Story",
      description:
        "A cowboy doll is profoundly threatened and jealous when a new spaceman action figure supplants him as top toy in a boy's bedroom.",
      image:
        "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_QL75_UX380_CR0,2,380,562_.jpg",
      big_image:
        "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_QL75_UX380_CR0,2,380,562_.jpg",
      genre: ["Animation", "Adventure", "Comedy"],
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_UX45_CR0,0,45,67_AL_.jpg",
      rating: "8.3",
      id: "top83",
      year: 1995,
      imdbid: "6",
      imdb_link: "https://www.imdb.com/title/tt0114709",
    },
    {
      rank: 84,
      title: "American Beauty",
      description:
        "A sexually frustrated suburban father has a mid-life crisis after becoming infatuated with his daughter's best friend.",
      image:
        "https://m.media-amazon.com/images/M/MV5BNTBmZWJkNjctNDhiNC00MGE2LWEwOTctZTk5OGVhMWMyNmVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      big_image:
        "https://m.media-amazon.com/images/M/MV5BNTBmZWJkNjctNDhiNC00MGE2LWEwOTctZTk5OGVhMWMyNmVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      genre: ["Drama"],
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BNTBmZWJkNjctNDhiNC00MGE2LWEwOTctZTk5OGVhMWMyNmVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY67_CR0,0,45,67_AL_.jpg",
      rating: "8.3",
      id: "top84",
      year: 1999,
      imdbid: "5",
      imdb_link: "https://www.imdb.com/title/tt0169547",
    },
    {
      rank: 81,
      title: "Capernaum",
      description:
        "While serving a five-year sentence for a violent crime, a 12-year-old boy sues his parents for neglect.",
      image:
        "https://m.media-amazon.com/images/M/MV5BY2Y3OWNkMTctYzNjYS00NWVkLTg4OWEtY2YxN2I3NDhlYzE0XkEyXkFqcGdeQXVyMTI3ODAyMzE2._V1_QL75_UY562_CR7,0,380,562_.jpg",
      big_image:
        "https://m.media-amazon.com/images/M/MV5BY2Y3OWNkMTctYzNjYS00NWVkLTg4OWEtY2YxN2I3NDhlYzE0XkEyXkFqcGdeQXVyMTI3ODAyMzE2._V1_QL75_UY562_CR7,0,380,562_.jpg",
      genre: ["Drama"],
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BY2Y3OWNkMTctYzNjYS00NWVkLTg4OWEtY2YxN2I3NDhlYzE0XkEyXkFqcGdeQXVyMTI3ODAyMzE2._V1_UY67_CR1,0,45,67_AL_.jpg",
      rating: "8.4",
      id: "top81",
      year: 2018,
      imdbid: "4",
      imdb_link: "https://www.imdb.com/title/tt8267604",
    },
    {
      rank: 82,
      title: "Come and See",
      description:
        "After finding an old rifle, a young boy joins the Soviet resistance movement against ruthless German forces and experiences the horrors of World War II.",
      image:
        "https://m.media-amazon.com/images/M/MV5BODM4Njg0NTAtYjI5Ny00ZjAxLTkwNmItZTMxMWU5M2U3M2RjXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,10,380,562_.jpg",
      big_image:
        "https://m.media-amazon.com/images/M/MV5BODM4Njg0NTAtYjI5Ny00ZjAxLTkwNmItZTMxMWU5M2U3M2RjXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,10,380,562_.jpg",
      genre: ["Drama", "Thriller", "War"],
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BODM4Njg0NTAtYjI5Ny00ZjAxLTkwNmItZTMxMWU5M2U3M2RjXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX100_CR0,3,100,148_.jpg",
      rating: "8.4",
      id: "top82",
      year: 1985,
      imdbid: "3",
      imdb_link: "https://www.imdb.com/title/tt0091251",
    },
    {
      rank: 83,
      title: "Toy Story",
      description:
        "A cowboy doll is profoundly threatened and jealous when a new spaceman action figure supplants him as top toy in a boy's bedroom.",
      image:
        "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_QL75_UX380_CR0,2,380,562_.jpg",
      big_image:
        "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_QL75_UX380_CR0,2,380,562_.jpg",
      genre: ["Animation", "Adventure", "Comedy"],
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_UX45_CR0,0,45,67_AL_.jpg",
      rating: "8.3",
      id: "top83",
      year: 1995,
      imdbid: "2",
      imdb_link: "https://www.imdb.com/title/tt0114709",
    },
    {
      rank: 84,
      title: "American Beauty",
      description:
        "A sexually frustrated suburban father has a mid-life crisis after becoming infatuated with his daughter's best friend.",
      image:
        "https://m.media-amazon.com/images/M/MV5BNTBmZWJkNjctNDhiNC00MGE2LWEwOTctZTk5OGVhMWMyNmVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      big_image:
        "https://m.media-amazon.com/images/M/MV5BNTBmZWJkNjctNDhiNC00MGE2LWEwOTctZTk5OGVhMWMyNmVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      genre: ["Drama"],
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BNTBmZWJkNjctNDhiNC00MGE2LWEwOTctZTk5OGVhMWMyNmVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY67_CR0,0,45,67_AL_.jpg",
      rating: "8.3",
      id: "top84",
      year: 1999,
      imdbid: "1",
      imdb_link: "https://www.imdb.com/title/tt0169547",
    },
  ]);


  const getObjectToDescriptionPage = (itemId: string) => {
    const descObj = updatedMovies.find((item) => item.imdbid === itemId)
    console.log(descObj);
  };

  return (
    <section className="recently-updated">
      <div className="recently-updated-title container">
        <h2 className="recently-updated-title-text">Recently Updated</h2>
      </div>
      <div className="updatet-items container">
        {updatedMovies.map((item) => (
          <button
            key={item.imdbid}
            className="btn-to-decription-page"
            onClick={() => getObjectToDescriptionPage(item.imdbid)}
          >
            <div className="updatet-item" key={item.imdbid}>
              <div className="updatet-item-img">
                <img className="uptadet-img" src={item.image} />
              </div>
              <div className="updatet-item-desc">
                <h4 className="updatet-item-title">{item.title}</h4>
                <h4 className="updatet-item-data">{item.year}</h4>
                <h4 className="updatet-item-rank">{item.rating}</h4>
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default RecentlyUpdated;
