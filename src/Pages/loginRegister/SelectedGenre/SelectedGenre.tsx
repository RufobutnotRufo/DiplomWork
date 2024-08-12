import "./SelectedGenre.scss";
import { useMyContext } from "../../../UseContext";
import { Movie } from "../../../UserInterface";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";


const SelectedGenre = () => {
  const { selectedGenre, moviesBase,setSelectedGenre,setDescriptionData,descriptionData } = useMyContext();
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    const updatedFilterMovies = moviesBase.filter((item) =>
      item.genre.includes(selectedGenre)
    );
    setFilteredMovies(updatedFilterMovies);
  }, [selectedGenre, moviesBase]);


  const getMovieGenre = (e:any) =>{
    setSelectedGenre(e.target.textContent)
  }
  //к слову эти две функции та что сверху и та что снизу используется в двух местах но по скольку
  // они были маленькими я не стал переиспользовать их я знаю что это неправильно но меня время поджимает
  // а как это сделать правильно надо было эти две функции написать в UseContext и использовать те же стейты и
  //в качестве параметров передавать нужные нам данные 

  const getItemToDescription = (itemId:string) =>{
    const movieToDescription = moviesBase.find((item)=>item.id ===itemId);
    setDescriptionData(movieToDescription);
    navigate('/Description'); 
  }

  return (
    <section className="selected-genre-section">
      <div className="selected-genre-section-inner container">
        

        <div className="selected-genre-items">
          {filteredMovies.map((item) => (
            <div className="selected-genre-item" key={item.id}>
              <button className="selected-genre-item-img" key={item.id} onClick={()=>getItemToDescription(item.id)}>
                <img className="selected-genre-item-poster" src={item.image} />
              </button>
              <div className="selected-genre-item-desc">
                <h4 className="selected-genre-item-desc-title">{item.title}</h4>
                <ul className="selected-genre-item-desc-jenres-items">
                  {item.genre.map((item) => (
                    <button className="selected-genre-item-desc-jenres-item" onClick={(e)=>getMovieGenre(e)}>
                      {item}
                    </button>
                  ))}
                  <div className="selected-genre-item-desc-jenres-item-links">
                    <a
                      href={item.imdb_link}
                      className="selected-genre-item-desc-jenres-item-link"
                    >
                      Watch
                    </a>
                  </div>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedGenre;
