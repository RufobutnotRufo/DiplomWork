import { useState } from "react";
import "./LoginRegister.scss";
import RegistrationForm from "./RegistrationForm";
import { useMyContext } from "../../UseContext";
import { useNavigate } from "react-router";


const LoginRegister: React.FC = () => {
  const [isVisible, setVisible] = useState<boolean>(false);

  const toggleBlock = () => {
    setVisible(!isVisible);
  };

  const { registredUsers, setUserData } =
    useMyContext();
    const navigate = useNavigate(); 
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [validationErrorsToggle, setValidationErorsToggle] = useState(false);

  const getUserValues = (e: any, setInput: any) => {
    setInput(e.target.value);
  };

  const dataComparison = () => {
    registredUsers.map((item) => {
      if (item.email === inputEmail && item.password === inputPassword) {
        setUserData(item);
        navigate('/');
      } else {
        setValidationErorsToggle(true);
      }
    });
  };

 
  return (
    <section className="register-sign-up-field-section">
      <div className="login-register-container">
        <div className="login-register-container-inner">
          <div className="user-login-form">
            <div className="input-user-email">
              <p className="Enter-Email">Enter your Email</p>
              {validationErrorsToggle ? (
                <p className="userValidError">Неверный email или пароль</p>
              ) : (
                ""
              )}
              <input
                placeholder="Enter your Email..."
                className="email"
                onChange={(e) => getUserValues(e, setInputEmail)}
              />
            </div>
            <div className="input-user-password">
              <p className="Enter-Password">Enter your Password</p>
              <input
                onChange={(e) => getUserValues(e, setInputPassword)}
                placeholder="Enter your Password..."
                className="password"
              />
            </div>
            <div className="registration-btn-field">
              <button
                className="registration-btn"
                onClick={() => dataComparison()}
              >
                TO COME IN
              </button>
            </div>
          </div>
        </div>
        <div className="registration-btn-field">
          <button className="registration-btn" onClick={toggleBlock}>
            REGISTRATION
          </button>
        </div>
        {isVisible ? <RegistrationForm /> : ""}
      </div>
    </section>
  );
};

export default LoginRegister;
