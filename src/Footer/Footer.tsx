import "./Footer.scss";
import Disk from "../assets/pngwing.com.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-disk">
          <img src={Disk} alt="Disk Image" />
        </div>
        <div className="footer-text">
          <p>&copy; 2024 MovieMania. Все права защищены.</p>
          <p>
            Ваш путеводитель по миру фильмов. Откройте для себя шедевры
            кинематографа, оцените новинки, и делитесь своими впечатлениями с
            друзьями!
          </p>
        </div>
        <div className="footer-links">
          <a href="#about-us">О нас</a>
          <a href="#contact">Контакты</a>
          <a href="#support">Поддержка</a>
        </div>
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
