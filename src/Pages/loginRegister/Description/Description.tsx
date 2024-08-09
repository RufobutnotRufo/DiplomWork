import "./Description.scss";
import { useMyContext } from "../../../UseContext";
import { useNavigate } from "react-router";

const Description = () => {
  const { descriptionData,setSelectedGenre } = useMyContext();
  const navigate = useNavigate(); 

  const  getGenre = (e:any) =>{
    setSelectedGenre(e.target.textContent)
    navigate('/Description/Genre');
  }

  return (
    <section className="description-section">
      <div className="description-section-items container">
        <div className="description-section-item">
          <div className="description-section-item-img">
            <img className="item-img" alt="" src={descriptionData?.big_image} />
          </div>
          <div className="movie-description">
            <h1 className="movie-description-title">
              {descriptionData?.title}
            </h1>
            <h2 className="movie-description-description">
              {descriptionData?.description}
            </h2>
            <h3 className="movie-description-rank">
              RANK{" "}
              <span className="movie-description-rank-style">
                {descriptionData?.rank}
              </span>
            </h3>
            <div className="movie-description-genre">
              {descriptionData?.genre.map((item)=>(
                <button className="genre-item" onClick={(e)=>getGenre(e)}>{item}</button>
              ))}
            </div>
            <h4 className="movie-description-year">{descriptionData?.year}</h4>
            <h4 className="movie-description-raiting">
              {descriptionData?.rating}
            </h4>
          <div className="link-to-watch"><a href={descriptionData?.imdb_link} className="watch-now">
              Watch
            </a></div> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;
