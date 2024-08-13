import "./NewMovies.scss";
const NewMovies = () => {

   const newMoviesMovies = [
  {
    "rank": 21,
    "title": "Se7en",
    "description": "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
    "image": "https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,16,380,562_.jpg",
    "big_image": "https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,16,380,562_.jpg",
    "genre": [
      "Crime",
      "Drama",
      "Mystery"
    ],
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX45_CR0,0,45,67_AL_.jpg",
    "rating": "8.6",
    "id": "top21",
    "year": 1995,
    "imdbid": "tt0114369",
    "imdb_link": "https://www.imdb.com/title/tt0114369",
  },
  {
    "rank": 22,
    "title": "It's a Wonderful Life",
    "description": "An angel is sent from Heaven to help a desperately frustrated businessman by showing him what life would have been like if he had never existed.",
    "image": "https://m.media-amazon.com/images/M/MV5BZjc4NDZhZWMtNGEzYS00ZWU2LThlM2ItNTA0YzQ0OTExMTE2XkEyXkFqcGdeQXVyNjUwMzI2NzU@._V1_QL75_UY562_CR3,0,380,562_.jpg",
    "big_image": "https://m.media-amazon.com/images/M/MV5BZjc4NDZhZWMtNGEzYS00ZWU2LThlM2ItNTA0YzQ0OTExMTE2XkEyXkFqcGdeQXVyNjUwMzI2NzU@._V1_QL75_UY562_CR3,0,380,562_.jpg",
    "genre": [
      "Drama",
      "Family",
      "Fantasy"
    ],
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BZjc4NDZhZWMtNGEzYS00ZWU2LThlM2ItNTA0YzQ0OTExMTE2XkEyXkFqcGdeQXVyNjUwMzI2NzU@._V1_UY67_CR0,0,45,67_AL_.jpg",
    "rating": "8.6",
    "id": "top22",
    "year": 1946,
    "imdbid": "tt0038650",
    "imdb_link": "https://www.imdb.com/title/tt0038650"
  },
  {
    "rank": 23,
    "title": "Seven Samurai",
    "description": "Farmers from a village exploited by bandits hire a veteran samurai for protection, who gathers six other samurai to join him. As the samurai teach the peasants how to defend themselves, the village is attacked by an army of bandits.",
    "image": "https://m.media-amazon.com/images/M/MV5BNWQ3OTM4ZGItMWEwZi00MjI5LWI3YzgtNTYwNWRkNmIzMGI5XkEyXkFqcGdeQXVyNDY2MTk1ODk@._V1_QL75_UY562_CR11,0,380,562_.jpg",
    "big_image": "https://m.media-amazon.com/images/M/MV5BNWQ3OTM4ZGItMWEwZi00MjI5LWI3YzgtNTYwNWRkNmIzMGI5XkEyXkFqcGdeQXVyNDY2MTk1ODk@._V1_QL75_UY562_CR11,0,380,562_.jpg",
    "genre": [
      "Action",
      "Drama"
    ],
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BNWQ3OTM4ZGItMWEwZi00MjI5LWI3YzgtNTYwNWRkNmIzMGI5XkEyXkFqcGdeQXVyNDY2MTk1ODk@._V1_UY67_CR1,0,45,67_AL_.jpg",
    "rating": "8.6",
    "id": "top23",
    "year": 1954,
    "imdbid": "tt0047478",
    "imdb_link": "https://www.imdb.com/title/tt0047478"
  },
  {
    "rank": 24,
    "title": "The Silence of the Lambs",
    "description": "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
    "image": "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UY562_CR1,0,380,562_.jpg",
    "big_image": "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UY562_CR1,0,380,562_.jpg",
    "genre": [
      "Crime",
      "Drama",
      "Thriller"
    ],
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY67_CR0,0,45,67_AL_.jpg",
    "rating": "8.6",
    "id": "top24",
    "year": 1991,
    "imdbid": "tt0102926",
    "imdb_link": "https://www.imdb.com/title/tt0102926"
  },
  {
    "rank": 25,
    "title": "Saving Private Ryan",
    "description": "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
    "image": "https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_QL75_UY562_CR1,0,380,562_.jpg",
    "big_image": "https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_QL75_UY562_CR1,0,380,562_.jpg",
    "genre": [
      "Drama",
      "War"
    ],
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_UY67_CR0,0,45,67_AL_.jpg",
    "rating": "8.6",
    "id": "top25",
    "year": 1998,
    "imdbid": "tt0120815",
    "imdb_link": "https://www.imdb.com/title/tt0120815"
  },
  {
    "rank": 26,
    "title": "City of God",
    "description": "In the slums of Rio, two kids' paths diverge as one struggles to become a photographer and the other a kingpin.",
    "image": "https://m.media-amazon.com/images/M/MV5BOTMwYjc5ZmItYTFjZC00ZGQ3LTlkNTMtMjZiNTZlMWQzNzI5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,2,380,562_.jpg",
    "big_image": "https://m.media-amazon.com/images/M/MV5BOTMwYjc5ZmItYTFjZC00ZGQ3LTlkNTMtMjZiNTZlMWQzNzI5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,2,380,562_.jpg",
    "genre": [
      "Crime",
      "Drama"
    ],
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BOTMwYjc5ZmItYTFjZC00ZGQ3LTlkNTMtMjZiNTZlMWQzNzI5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX45_CR0,0,45,67_AL_.jpg",
    "rating": "8.6",
    "id": "top26",
    "year": 2002,
    "imdbid": "tt0317248",
    "imdb_link": "https://www.imdb.com/title/tt0317248"
  },
  {
    "rank": 27,
    "title": "Life Is Beautiful",
    "description": "When an open-minded Jewish waiter and his son become victims of the Holocaust, he uses a perfect mixture of will, humor, and imagination to protect his son from the dangers around their camp.",
    "image": "https://m.media-amazon.com/images/M/MV5BYmJmM2Q4NmMtYThmNC00ZjRlLWEyZmItZTIwOTBlZDQ3NTQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UX380_CR0,2,380,562_.jpg",
    "big_image": "https://m.media-amazon.com/images/M/MV5BYmJmM2Q4NmMtYThmNC00ZjRlLWEyZmItZTIwOTBlZDQ3NTQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UX380_CR0,2,380,562_.jpg",
    "genre": [
      "Comedy",
      "Drama",
      "Romance"
    ],
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BYmJmM2Q4NmMtYThmNC00ZjRlLWEyZmItZTIwOTBlZDQ3NTQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX45_CR0,0,45,67_AL_.jpg",
    "rating": "8.6",
    "id": "top27",
    "year": 1997,
    "imdbid": "tt0118799",
    "imdb_link": "https://www.imdb.com/title/tt0118799"
  },
  {
    "rank": 28,
    "title": "The Green Mile",
    "description": "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
    "image": "https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "big_image": "https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "genre": [
      "Crime",
      "Drama",
      "Fantasy"
    ],
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_UY67_CR0,0,45,67_AL_.jpg",
    "rating": "8.6",
    "id": "top28",
    "year": 1999,
    "imdbid": "tt0120689",
    "imdb_link": "https://www.imdb.com/title/tt0120689"
  },
  {
    "rank": 29,
    "title": "Star Wars: Episode IV - A New Hope",
    "description": "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
    "image": "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_QL75_UX380_CR0,9,380,562_.jpg",
    "big_image": "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_QL75_UX380_CR0,9,380,562_.jpg",
    "genre": [
      "Action",
      "Adventure",
      "Fantasy"
    ],
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_UX45_CR0,0,45,67_AL_.jpg",
    "rating": "8.6",
    "id": "top29",
    "year": 1977,
    "imdbid": "tt0076759",
    "imdb_link": "https://www.imdb.com/title/tt0076759"
  },
  {
    "rank": 30,
    "title": "Terminator 2: Judgment Day",
    "description": "A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her ten-year-old son John from a more advanced and powerful cyborg.",
    "image": "https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    "big_image": "https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@",
    "genre": [
      "Action",
      "Sci-Fi"
    ],
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY67_CR0,0,45,67_AL_.jpg",
    "rating": "8.6",
    "id": "top30",
    "year": 1991,
    "imdbid": "tt0103064",
    "imdb_link": "https://www.imdb.com/title/tt0103064"
  },
  {
    "rank": 31,
    "title": "Spirited Away",
    "description": "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
    "image": "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "big_image": "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "genre": [
      "Animation",
      "Adventure",
      "Family"
    ],
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY67_CR0,0,45,67_AL_.jpg",
    "rating": "8.6",
    "id": "top31",
    "year": 2001,
    "imdbid": "tt0245429",
    "imdb_link": "https://www.imdb.com/title/tt0245429"
  },
  {
    "rank": 32,
    "title": "Oppenheimer",
    "description": "The story of American scientist, J. Robert Oppenheimer, and his role in the development of the atomic bomb.",
    "image": "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "big_image": "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "genre": [
      "Biography",
      "Drama",
      "History"
    ],
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_UY67_CR0,0,45,67_AL_.jpg",
    "rating": "8.6",
    "id": "top32",
    "year": 2023,
    "imdbid": "tt15398776",
    "imdb_link": "https://www.imdb.com/title/tt15398776"
},]
  return (
    <section className="new-movies">
        <div className="new-movies-items">
        {newMoviesMovies.map((item)=>(
            <div className="card">
                <a href={item.imdb_link}>
                <img src={item.image} alt="" />
                <p className="item-title">{item.title}</p>
                <p className="item-raiting">{item.rating}</p>
                </a>
            </div>
        ))}
        </div>
    </section>
  );
};

export default NewMovies;
