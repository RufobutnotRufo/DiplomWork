import React from "react";
import "./RegistrationForm.scss";

const RegistrationForm: React.FC = () => {
  return (
    <div className="registration-form">
      <form>
        <div className="registration-form-group">
          <p className="registration-form-label">
            <label htmlFor="name">Name</label>
          </p>
          <input
            id="name"
            type="text"
            className="registration-form-input"
            placeholder="Name..."
          />
        </div>
        <div className="registration-form-group">
          <p className="registration-form-label">
            <label htmlFor="surname">Surname</label>
          </p>
          <input
            id="surname"
            type="text"
            className="registration-form-input"
            placeholder="Surname..."
          />
        </div>
        <div className="registration-form-group">
          <p className="registration-form-label">
            <label htmlFor="nickname">Nickname</label>
          </p>
          <input
            id="nickname"
            type="text"
            className="registration-form-input"
            placeholder="Nick-Name..."
          />
        </div>
        <div className="registration-form-group">
          <p className="registration-form-label">
            <label htmlFor="password">Password</label>
          </p>
          <input
            id="password"
            type="password"
            className="registration-form-input"
            placeholder="Password"
          />
        </div>
        <div className="registration-form-group">
          <p className="registration-form-label">
            <label htmlFor="repeat-password">Repeat Password</label>
          </p>
          <input
            id="repeat-password"
            type="password"
            className="registration-form-input"
            placeholder="Repeat your password"
          />
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
