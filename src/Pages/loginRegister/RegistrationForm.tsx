import "./RegistrationForm.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import { UserInterface } from "../../UserInterface";
import { useMyContext } from "../../UseContext";
import Done from "../../assets/icons8-done.svg";
import { useState } from "react";

const RegistrationForm: React.FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<UserInterface>();

  const { registredUsers, setRegistredUsers } = useMyContext();

  const [sucsefulRegisterToggle, setSucsefulRegisterToggle] = useState(true);

  const onSubmit: SubmitHandler<UserInterface> = (data) => {
    setRegistredUsers([...registredUsers, data]);
    setSucsefulRegisterToggle(false)
  };

  const password = watch("password");

  return (
    <>
      {sucsefulRegisterToggle ? (
        <div className="registration-form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="registration-form-group">
              <label htmlFor="name" className="registration-form-label">
                <p>Name</p>
              </label>
              <div>
                {errors.name && (
                  <p className="form-errors-style">{errors.name.message}</p>
                )}
              </div>
              <input
                {...register("name", {
                  required: "Поле обязательно к заполнению",
                  minLength: {
                    value: 5,
                    message: "Минимум 5 символов",
                  },
                })}
                id="name"
                type="text"
                className="registration-form-input"
                placeholder="Name..."
              />
            </div>
            <div className="registration-form-group">
              <label htmlFor="surname" className="registration-form-label">
                <p>Surname</p>
              </label>
              <div>
                {errors.surname && (
                  <p className="form-errors-style">{errors.surname.message}</p>
                )}
              </div>
              <input
                {...register("surname", {
                  required: "Поле обязательно к заполнению",
                  minLength: {
                    value: 5,
                    message: "Минимум 5 символов",
                  },
                })}
                id="surname"
                type="text"
                className="registration-form-input"
                placeholder="Surname..."
              />
            </div>
            <div className="registration-form-group">
              <label htmlFor="email" className="registration-form-label">
                <p>Email</p>
              </label>
              <div>
                {errors.email && (
                  <p className="form-errors-style">{errors.email.message}</p>
                )}
              </div>
              <input
                {...register("email", {
                  required: "Поле обязательно к заполнению",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Некорректный email",
                  },
                })}
                id="email"
                type="text"
                className="registration-form-input"
                placeholder="Email..."
              />
            </div>
            <div className="registration-form-group">
              <label htmlFor="password" className="registration-form-label">
                <p>Password</p>
              </label>
              <div>
                {errors.password && (
                  <p className="form-errors-style">{errors.password.message}</p>
                )}
              </div>
              <input
                {...register("password", {
                  required: "Поле обязательно к заполнению",
                  pattern: {
                    value: /^(?=.*[a-z]).{8,}$/,
                    message:
                      "Пароль должен содержать минимум 8 символов и включать хотя бы одну букву в нижнем регистре",
                  },
                })}
                id="password"
                type="password"
                className="registration-form-input"
                placeholder="Password..."
              />
            </div>
            <div className="registration-form-group">
              <label
                htmlFor="repeat-password"
                className="registration-form-label"
              >
                <p>Repeat Password</p>
              </label>
              <div>
                {errors.repeatPassword && (
                  <p className="form-errors-style">
                    {errors.repeatPassword.message}
                  </p>
                )}
              </div>
              <input
                {...register("repeatPassword", {
                  required: "Поле обязательно к заполнению",
                  validate: (value) =>
                    value === password || "Пароли не совпадают",
                })}
                id="repeat-password"
                type="password"
                className="registration-form-input"
                placeholder="Repeat your password..."
              />
            </div>
            <button type="submit" className="registration-form-submit">
              Register
            </button>
          </form>
        </div>
      ) : (
        <div className="sucsesfule-register">
          SUCSESFUL
          <span>
            <img src={Done} />
          </span>
        </div>
      )}
    </>
  );
};

export default RegistrationForm;
