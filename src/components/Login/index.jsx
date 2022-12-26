import React from "react";

import { FaGoogle } from "react-icons/fa";
import useLogin from "./useLogin";
import validateInfo from "./validateInfo";
import "./login.css";
import Image from "../../images/logo.png";

const Login = () => {
  const { handleChange, values, handleSubmit, errors } = useLogin(validateInfo);

  return (
    <>
      <div className="text-alert">
        <h3 className="alert" data-text="En construcción..">
          En Construcción..
        </h3>
      </div>
      <div className="content">
        <img src={Image} className="image" alt="logo" />
        <h1 className="content-header">Identificate</h1>
        <form className="form" onSubmit={handleSubmit}>
          <h3 className="email-text">Correo electronico</h3>
          <div className="form-input">
            <label className="form-label">
              <input
                type="text"
                id="email"
                name="email"
                className="input-field" //placeholder="Ejemplo@gmail.com"
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && <p>{errors.email}</p>}
            </label>
          </div>
          <h3 className="password-text">Contraseña</h3>
          <div className="form-input">
            <label className="form-label">
              <input
                type="password"
                name="password"
                className="input-field" ///placeholder="xxxxxxxx"
                value={values.password}
                onChange={handleChange}
              />
              {errors.password && <p>{errors.password}</p>}
            </label>
          </div>
          <div className="signUp-btn">
            <button className="form-input-btn" type="submit">
              INGRESAR
            </button>
          </div>
          <span className="create-account">
            <hr />
            ¿Nuevo?
            <a href="/#" className="Btn-account">
              Crear Cuenta
            </a>
          </span>
          <div className="signUp-google">
            <button className="form-input-btn google" type="submit">
              <FaGoogle /> Ingresar con google
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
