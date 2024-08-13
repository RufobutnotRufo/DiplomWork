import "./WatchLater.scss";
import { useMyContext } from "../../../UseContext";
import { useState } from "react";
import { Movie } from "../../../UserInterface";
const WatchLater = () => {
  const [watchNowDatas, setWatchNowDatas] = useState<Movie[]>([
    {
      rank: 11,
      title: "Forrest Gump",
      description:
        "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
      image:
        "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UY562_CR4,0,380,562_.jpg",
      big_image:
        "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UY562_CR4,0,380,562_.jpg",
      genre: ["Drama", "Romance"],
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY67_CR0,0,45,67_AL_.jpg",
      rating: "8.8",
      id: "top11",
      year: 1994,
      imdbid: "tt0109830",
      imdb_link: "https://www.imdb.com/title/tt0109830",
    },
    {
      rank: 12,
      title: "Fight Club",
      description:
        "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
      image:
        "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UX380_CR0,1,380,562_.jpg",
      big_image:
        "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@",
      genre: ["Drama"],
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UY67_CR0,0,45,67_AL_.jpg",
      rating: "8.8",
      id: "top12",
      year: 1999,
      imdbid: "tt0137523",
      imdb_link: "https://www.imdb.com/title/tt0137523",
    },
    {
      rank: 13,
      title: "The Lord of the Rings: The Two Towers",
      description:
        "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
      image:
        "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,14,380,562_.jpg",
      big_image:
        "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,14,380,562_.jpg",
      genre: ["Action", "Adventure", "Drama"],
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX45_CR0,0,45,67_AL_.jpg",
      rating: "8.8",
      id: "top13",
      year: 2002,
      imdbid: "tt0167261",
      imdb_link: "https://www.imdb.com/title/tt0167261",
    },
    {
      rank: 14,
      title: "Inception",
      description:
        "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
      image:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      big_image:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      genre: ["Action", "Adventure", "Sci-Fi"],
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UY67_CR0,0,45,67_AL_.jpg",
      rating: "8.7",
      id: "top14",
      year: 2010,
      imdbid: "tt1375666",
      imdb_link: "https://www.imdb.com/title/tt1375666",
    },
    {
      rank: 15,
      title: "Star Wars: Episode V - The Empire Strikes Back",
      description:
        "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued across the galaxy by Darth Vader and bounty hunter Boba Fett.",
      image:
        "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,15,380,562_.jpg",
      big_image:
        "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,15,380,562_.jpg",
      genre: ["Action", "Adventure", "Fantasy"],
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX45_CR0,0,45,67_AL_.jpg",
      rating: "8.7",
      id: "top15",
      year: 1980,
      imdbid: "tt0080684",
      imdb_link: "https://www.imdb.com/title/tt0080684",
    },
    {
      rank: 16,
      title: "The Matrix",
      description:
        "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
      image:
        "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,4,380,562_.jpg",
      big_image:
        "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,4,380,562_.jpg",
      genre: ["Action", "Sci-Fi"],
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX45_CR0,0,45,67_AL_.jpg",
      rating: "8.7",
      id: "top16",
      year: 1999,
      imdbid: "tt0133093",
      imdb_link: "https://www.imdb.com/title/tt0133093",
    },
    {
      rank: 17,
      title: "Goodfellas",
      description:
        "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
      image:
        "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,3,380,562_.jpg",
      big_image:
        "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,3,380,562_.jpg",
      genre: ["Biography", "Crime", "Drama"],
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX45_CR0,0,45,67_AL_.jpg",
      rating: "8.7",
      id: "top17",
      year: 1990,
      imdbid: "tt0099685",
      imdb_link: "https://www.imdb.com/title/tt0099685",
    },
    {
      rank: 18,
      title: "Spider-Man: Across the Spider-Verse",
      description:
        "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. When the heroes clash on how to handle a new threat, Miles must redefine what it means to be a hero.",
      image:
        "https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@.._V1_QL75_UX380_CR0,0,380,562_.jpg",
      big_image:
        "https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@.._V1_QL75_UX380_CR0,0,380,562_.jpg",
      genre: ["Animation", "Action", "Adventure"],
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@.._V1_UY67_CR0,0,45,67_AL_.jpg",
      rating: "8.7",
      id: "top18",
      year: 2023,
      imdbid: "tt9362722",
      imdb_link: "https://www.imdb.com/title/tt9362722",
    },
    {
      rank: 19,
      title: "Interstellar",
      description:
        "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      image:
        "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      big_image:
        "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      genre: ["Adventure", "Drama", "Sci-Fi"],
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY67_CR0,0,45,67_AL_.jpg",
      rating: "8.7",
      id: "top19",
      year: 2014,
      imdbid: "tt0816692",
      imdb_link: "https://www.imdb.com/title/tt0816692",
    },
    {
      rank: 20,
      title: "One Flew Over the Cuckoo's Nest",
      description:
        "In the Fall of 1963, a Korean War veteran and criminal pleads insanity and is admitted to a mental institution, where he rallies up the scared patients against the tyrannical nurse.",
      image:
        "https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UX380_CR0,1,380,562_.jpg",
      big_image:
        "https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@",
      genre: ["Drama"],
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY67_CR0,0,45,67_AL_.jpg",
      rating: "8.6",
      id: "top20",
      year: 1975,
      imdbid: "tt0073486",
      imdb_link: "https://www.imdb.com/title/tt0073486",
    },
    {
      rank: 21,
      title: "Se7en",
      description:
        "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
      image:
        "https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,16,380,562_.jpg",
      big_image:
        "https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,16,380,562_.jpg",
      genre: ["Crime", "Drama", "Mystery"],
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX45_CR0,0,45,67_AL_.jpg",
      rating: "8.6",
      id: "top21",
      year: 1995,
      imdbid: "tt0114369",
      imdb_link: "https://www.imdb.com/title/tt0114369",
    },
    {
      rank: 22,
      title: "It's a Wonderful Life",
      description:
        "An angel is sent from Heaven to help a desperately frustrated businessman by showing him what life would have been like if he had never existed.",
      image:
        "https://m.media-amazon.com/images/M/MV5BZjc4NDZhZWMtNGEzYS00ZWU2LThlM2ItNTA0YzQ0OTExMTE2XkEyXkFqcGdeQXVyNjUwMzI2NzU@._V1_QL75_UY562_CR3,0,380,562_.jpg",
      big_image:
        "https://m.media-amazon.com/images/M/MV5BZjc4NDZhZWMtNGEzYS00ZWU2LThlM2ItNTA0YzQ0OTExMTE2XkEyXkFqcGdeQXVyNjUwMzI2NzU@._V1_QL75_UY562_CR3,0,380,562_.jpg",
      genre: ["Drama", "Family", "Fantasy"],
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BZjc4NDZhZWMtNGEzYS00ZWU2LThlM2ItNTA0YzQ0OTExMTE2XkEyXkFqcGdeQXVyNjUwMzI2NzU@._V1_UY67_CR0,0,45,67_AL_.jpg",
      rating: "8.6",
      id: "top22",
      year: 1946,
      imdbid: "tt0038650",
      imdb_link: "https://www.imdb.com/title/tt0038650",
    },
    {
      rank: 23,
      title: "Seven Samurai",
      description:
        "Farmers from a village exploited by bandits hire a veteran samurai for protection, who gathers six other samurai to join him. As the samurai teach the peasants how to defend themselves, the village is attacked by an army of bandits.",
      image:
        "https://m.media-amazon.com/images/M/MV5BNWQ3OTM4ZGItMWEwZi00MjI5LWI3YzgtNTYwNWRkNmIzMGI5XkEyXkFqcGdeQXVyNDY2MTk1ODk@._V1_QL75_UY562_CR11,0,380,562_.jpg",
      big_image:
        "https://m.media-amazon.com/images/M/MV5BNWQ3OTM4ZGItMWEwZi00MjI5LWI3YzgtNTYwNWRkNmIzMGI5XkEyXkFqcGdeQXVyNDY2MTk1ODk@._V1_QL75_UY562_CR11,0,380,562_.jpg",
      genre: ["Action", "Drama"],
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BNWQ3OTM4ZGItMWEwZi00MjI5LWI3YzgtNTYwNWRkNmIzMGI5XkEyXkFqcGdeQXVyNDY2MTk1ODk@._V1_UY67_CR1,0,45,67_AL_.jpg",
      rating: "8.6",
      id: "top23",
      year: 1954,
      imdbid: "tt0047478",
      imdb_link: "https://www.imdb.com/title/tt0047478",
    },
    {
      rank: 24,
      title: "The Silence of the Lambs",
      description:
        "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
      image:
        "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UY562_CR1,0,380,562_.jpg",
      big_image:
        "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UY562_CR1,0,380,562_.jpg",
      genre: ["Crime", "Drama", "Thriller"],
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY67_CR0,0,45,67_AL_.jpg",
      rating: "8.6",
      id: "top24",
      year: 1991,
      imdbid: "tt0102926",
      imdb_link: "https://www.imdb.com/title/tt0102926",
    },
  ]);
  const { moviesBase } = useMyContext();
  const [dataDecriptionToBackround, setDataDecriptionTobackround] =
    useState<Movie>();

  const getItemDescriptionHover = (movieId: string) => {
    const element = moviesBase.find((item) => item.id === movieId);
    setDataDecriptionTobackround(element);
  };

  return (
    <section className="watch-now-section">
      <div className="watch-now-section-inner-item container">
        {watchNowDatas.map((item) => (
          <div
            className="watch-now-section-inner-item-img"
            key={item.imdbid}
            onMouseEnter={() => getItemDescriptionHover(item.id)}
          >
            <img
              className="watch-now-section-inner-item-poster"
              src={item.image}
            />
          </div>
        ))}
      </div>
      <div className="watch-now-section-inner container">
        <a href={dataDecriptionToBackround?.imdb_link}>
          <div className="watch-now-section-inner-desc">
            <div className="watch-now-section-inner-desc-poster">
              <img className="img" src={dataDecriptionToBackround?.big_image} />
            </div>
            <div className="block-desc container">
              <h1 className="watch-now-section-inner-movie-desc-title">
                {dataDecriptionToBackround?.title}
              </h1>
              <h2 className="watch-now-section-inner-movie-desc-rank">
                {dataDecriptionToBackround?.rank}
              </h2>
              <h3 className="watch-now-section-inner-movie-desc-rank-imdb">
                {dataDecriptionToBackround?.year}
              </h3>
              <ul className="watch-now-section-inner-movie-desc-genre">
                {dataDecriptionToBackround?.genre.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
              <h6 className="watch-now-section-inner-movie-desc-description">
                {dataDecriptionToBackround?.description}
              </h6>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default WatchLater;
