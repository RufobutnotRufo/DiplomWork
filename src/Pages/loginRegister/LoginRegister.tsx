import { useState } from "react";
import "./LoginRegister.scss";
import RegistrationForm from "./RegistrationForm";
const LoginRegister: React.FC = () => {
  const [isVisible, setVisible] = useState<boolean>(false);

  const toggleBlock = () => {
    setVisible(!isVisible);
  };

  return (
    <section className="register-sign-up-field-section">
      <div className="login-register-container">
        <div className="login-register-container-inner">
          <div className="user-login-form">
            <div className="input-user-email">
              <p className="Enter-Email">Enter your Email</p>
              <input placeholder="Enter your Email..." className="email" />
            </div>
            <div className="input-user-password">
              <p className="Enter-Password">Enter your Password</p>
              <input
                placeholder="Enter your Password..."
                className="password"
              />
            </div>
            <div className="registration-btn-field">
              <button className="registration-btn">TO COME IN</button>
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
