import { useEffect, useState } from "react";
import "./OurCinema.scss";
import Vide from "../assets/Scarface Money Meme_Push It To The Limit Meme Template by @514MMemes.mp4";

const OurCinema: React.FC = () => {
  const [items, setItems] = useState([
    { id: 1, place: "1", reserved: false, price: 100 },
    { id: 2, place: "2", reserved: false, price: 200 },
    { id: 3, place: "3", reserved: false, price: 300 },
    { id: 4, place: "4", reserved: false, price: 400 },
    { id: 5, place: "5", reserved: false, price: 500 },
    { id: 6, place: "6", reserved: false, price: 600 },
    { id: 7, place: "7", reserved: false, price: 700 },
    { id: 8, place: "8", reserved: false, price: 800 },
    { id: 9, place: "9", reserved: false, price: 900 },
    { id: 10, place: "10", reserved: false, price: 100 },
    { id: 11, place: "11", reserved: false, price: 200 },
    { id: 12, place: "12", reserved: false, price: 300 },
    { id: 13, place: "13", reserved: false, price: 400 },
    { id: 14, place: "14", reserved: false, price: 500 },
    { id: 15, place: "15", reserved: false, price: 600 },
    { id: 16, place: "16", reserved: false, price: 700 },
    { id: 17, place: "17", reserved: false, price: 800 },
    { id: 18, place: "18", reserved: false, price: 900 },
    { id: 19, place: "19", reserved: false, price: 100 },
    { id: 20, place: "20", reserved: false, price: 200 },
    { id: 21, place: "21", reserved: false, price: 300 },
    { id: 22, place: "22", reserved: false, price: 400 },
    { id: 23, place: "23", reserved: false, price: 500 },
    { id: 24, place: "24", reserved: false, price: 600 },
  ]);

  const [totalPrice, setTotalPrice] = useState(0);
  const [paymentReload, setPaymentReload] = useState(false);
  const [paymentError, setPaymentError] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const cardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value.replace(/\D/g, "");
    if (input.length > 16) {
      input = input.slice(0, 16);
    }
    const formattedInput = input.replace(/(\d{4})(?=\d)/g, "$1 ");
    setCardNumber(formattedInput);
  };

  const expiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value.replace(/\D/g, "");
    if (input.length > 4) {
      input = input.slice(0, 4);
    }
    const formattedInput = input.replace(/(\d{2})(?=\d)/g, "$1/");
    setExpiryDate(formattedInput);
  };

  const reservedItem = (itemId: number) => {
    const updatedItems = items.map((item) =>
      item.id === itemId ? { ...item, reserved: !item.reserved } : item
    );
    setItems(updatedItems);
  };

  useEffect(() => {
    const sum = items.reduce((total, item) => {
      return item.reserved ? total + item.price : total;
    }, 0);
    setTotalPrice(sum);
  }, [items]);

  const createPyramid = (
    items: { id: number; place: string; reserved: boolean; price: number }[]
  ) => {
    const result: {
      id: number;
      place: string;
      reserved: boolean;
      price: number;
    }[][] = [];
    let rowCount = 5;
    let index = 0;

    while (index < items.length) {
      const row = items.slice(index, index + rowCount);
      result.push(row);
      index += rowCount;
      rowCount++;
    }
    return result;
  };

  const paymetLoadFunc = () => {
    setPaymentReload(true);

    setTimeout(() => {
      setPaymentReload(false);
      setPaymentError(true);
    }, 3500);
  };

  const togglePaymentModal = () => {
    setShowPaymentModal(!showPaymentModal);
  };


  const showAlert = () =>{
    alert('No use')
  }
  const pyramid = createPyramid(items);

  return (
    <section className="our-cinema-section">
      <h1 className="our-cinema-section-title">
        Reserve your spot for the hot new movie
      </h1>
      <div className="new-movie">
        <div className="new-movie-img">
          <img
            src="https://m.media-amazon.com/images/M/MV5BMTI3NTQyMzU5M15BMl5BanBnXkFtZTcwMTM2MjgyMQ@@._V1_QL75_UX380_CR0,0,380,562_.jpg"
            alt="Oldboy"
          />
        </div>
        <h3 className="new-movie-img-title">Oldboy</h3>
        <p className="new-movie-img-title-desc">
          After being kidnapped and imprisoned for fifteen years, Oh Dae-Su is
          released, only to find that he must find his captor in five days.
        </p>
      </div>
      <div className="cinema-field-reserve">
        <div className="cinema-field-reserve-cells">
          <h1 className="total-price">
            Total Price:
            <span className="total-price-tickets">{totalPrice}</span>
          </h1>
          <ul className="cinema-field-reserve-cells-items">
            {pyramid.map((row, rowIndex) => (
              <li key={rowIndex} className="cinema-field-reserve-cells-row">
                {row.map((item) => (
                  <button
                    onClick={() => reservedItem(item.id)}
                    key={item.id}
                    className={`cinema-field-reserve-cells-item ${
                      item.reserved ? "active" : ""
                    }`}
                  >
                    {item.place}
                  </button>
                ))}
              </li>
            ))}
          </ul>
          <div className="buy-tickets">
            {paymentReload ? (
              <div className="rainbow-loader-border">
                <div className="border"></div>
                <div className="glow"></div>
              </div>
            ) : (
              <button
                className="buy-tickets-btn"
                onClick={() => paymetLoadFunc()}
              >
                RESERVE PLACE
              </button>
            )}
            {showPaymentModal && (
              <div className="modal-payment-window">
                <form action="submit">
                  <div className="modal-payment-window-info-texts">
                    <h1 className="modal-payment-window-title">Card Info</h1>
                    <h3 className="modal-payment-window-title-card-info">
                      if you have problems adding a payment card
                    </h3>
                  </div>
                  <a href="http://bettercallsaul.amc.com/index.php">
                    Better cal Soul
                  </a>
                  <div className="credit-cart-field">
                    <div className="card-number">
                      <input
                        type="text"
                        placeholder="0000 0000 0000 0000"
                        value={cardNumber}
                        onChange={cardNumberChange}
                      />
                    </div>
                    <div className="cart-date">
                      <input
                        type="text"
                        placeholder="MM/YY"
                        value={expiryDate}
                        onChange={expiryDateChange}
                      />
                    </div>
                    <p className="contact">*7777 kridor.az</p>
                  </div>
                </form>
                <button className="add-cart-btn" onClick={showAlert}>Add Card</button>
              </div>
            )}
            {paymentError ? (
              <div className="payment-error">
                <button className="card-payment" onClick={togglePaymentModal}>
                  Добавить карту оплаты
                </button>
                <h1>ERROR PAYMENT</h1>
                <h5>
                  Скорее всего ваши деньги украдены Тони Монтаной, попробуйте
                  добавить карту оплаты
                </h5>
                <video src={Vide} width="40%" loop autoPlay controls>
                  <source src={Vide} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="cinema-display">
            <h1>Display</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCinema;
