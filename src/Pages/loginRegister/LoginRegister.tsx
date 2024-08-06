import "./LoginRegister.scss";
import RegistrationForm from "./RegistrationForm";
const LoginRegister: React.FC = () => {
  return (
    <div className="login-register-container">
      <div className="login-register-container-inner">
        <div className="user-login-form">
          <div className="input-user-email">
            <p className="Enter-Email">Enter your Email</p>
            <input placeholder="Enter your Email..." className="email" />
          </div>
          <div className="input-user-password">
            <p className="Enter-Password">Enter your Password</p>
            <input placeholder="Enter your Password..." className="password" />
          </div>
        </div>
      </div>
      <div className="registration-btn-field">
        <button className="registration-btn">Register</button>
        <RegistrationForm />
      </div>
    </div>
  );
};

export default LoginRegister;
