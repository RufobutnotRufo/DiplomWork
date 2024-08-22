import "./BusketPage.scss";
import { useMyContext } from "../../../UseContext";


const BusketPage: React.FC = () => {
  const { busket, setBusket } = useMyContext();

  const deleteFromBusket = (itemId: number) => {
    const filtredArr = busket.filter((item) => {
      if (item.id !== itemId) {
        return item;
      }
    });
    setBusket(filtredArr);
  };

  let totalPrice = 0;


  const getTotalPrice = busket.forEach((item)=>{
    totalPrice += item.price
  })

  console.log(getTotalPrice,'undefined?');

  

  return (
    <section className="busket-section">
      <div className="busket-section-inner container">
        <div className="busket-section-title">
          <h1 className="busket-title">My Busket-robbins</h1>
        </div>
        {busket.length === 0 ? (
          <h1 className="busket-empty-title">Busket Empty</h1>
        ) : (
          <div className="busket-prods-items">
            {busket.map((item) => (
              <>
                <div className="busekt-prod-item" key={item.id}>
                  <div className="busket-prod-img">
                    <img className="img-busket0item" alt="" src={item.img} />
                  </div>
                  <h1 className="busekt-prod-title">{item.quantity}</h1>
                  <h2 className="movie-title">{item.movie}</h2>
                  <h3 className="busekt-item-description">
                    {item.description}
                  </h3>
                  <h4 className="busket-item-price">{item.price}</h4>
                  <button
                    className="delete-from-busket-btn"
                    onClick={() => deleteFromBusket(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BusketPage;
