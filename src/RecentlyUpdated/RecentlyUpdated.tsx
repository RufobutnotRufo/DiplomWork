import './RecentlyUpdated.scss';
import { useState } from 'react';

const RecentlyUpdated = () => {
 
//Хотел использовать useEffect для того чтобы имитровать вытягивание данных но потом подумал ну его 

    const [updatedMovies, setUpdatetMovies] = useState([
        {
            "rank": 11,
            "title": "Forrest Gump",
            "description": "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
            "image": "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UY562_CR4,0,380,562_.jpg",
            "big_image": "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UY562_CR4,0,380,562_.jpg",
            "genre": [
              "Drama",
              "Romance"
            ],
            "thumbnail": "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY67_CR0,0,45,67_AL_.jpg",
            "rating": "8.8",
            "id": "top11",
            "year": 1994,
            "imdbid": "tt0109830",
            "imdb_link": "https://www.imdb.com/title/tt0109830",
          },
          {
            "rank": 12,
            "title": "Fight Club",
            "description": "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
            "image": "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UX380_CR0,1,380,562_.jpg",
            "big_image": "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@",
            "genre": [
              "Drama"
            ],
            "thumbnail": "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UY67_CR0,0,45,67_AL_.jpg",
            "rating": "8.8",
            "id": "top12",
            "year": 1999,
            "imdbid": "tt0137523",
            "imdb_link": "https://www.imdb.com/title/tt0137523"
          },
          {
            "rank": 13,
            "title": "The Lord of the Rings: The Two Towers",
            "description": "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
            "image": "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,14,380,562_.jpg",
            "big_image": "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,14,380,562_.jpg",
            "genre": [
              "Action",
              "Adventure",
              "Drama"
            ],
            "thumbnail": "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX45_CR0,0,45,67_AL_.jpg",
            "rating": "8.8",
            "id": "top13",
            "year": 2002,
            "imdbid": "tt0167261",
            "imdb_link": "https://www.imdb.com/title/tt0167261"
          },
          {
            "rank": 14,
            "title": "Inception",
            "description": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
            "image": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
            "big_image": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
            "genre": [
              "Action",
              "Adventure",
              "Sci-Fi"
            ],
            "thumbnail": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UY67_CR0,0,45,67_AL_.jpg",
            "rating": "8.7",
            "id": "top14",
            "year": 2010,
            "imdbid": "tt1375666",
            "imdb_link": "https://www.imdb.com/title/tt1375666"
          },
    ])
   

  return (
    <section className="recently-updated container">
      <div className="recently-updated-title">
        <h2 className="recently-updated-title-text">Recently Updated</h2>
      </div>
      <div className="updatet-items">
        <div className="updatet-item">
          <div className="updatet-item-img">
            <img className="uptadet-img" src='' />
          </div>
          <div className="updatet-item-desc">
            <h4 className="updatet-item-title">1</h4>
            <h4 className="updatet-item-data">2</h4>
            <h4 className="updatet-item-rank">3</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentlyUpdated;
