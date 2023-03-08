/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import './regForm.css';

function RegistrationForm() {
  return (
    <div>
      <div className="regForm-container">
        <div className="regForm-header">
          <i className="fa-solid regForm-icon1 fa-user" />
          <h2>Creat Account!</h2>
        </div>
        <div>
          <form action="">
            <div className="regForm-inputs">
              <div className="regForm-input">
                <label htmlFor="">First Name</label>
                <i className="fa-solid regName-icon fa-user" />
                <input className="regForm-input1" type="text" required />
              </div>
              <div className="regForm-input">
                <label htmlFor="">Last Name</label>
                <i className="fa-solid regName-icon fa-user" />
                <input className="regForm-input1" type="text" required />
              </div>
              <div className="form-input">
                <label htmlFor="">Email</label>
                <i className="fa-solid regEmail-icon fa-envelope" />
                <input className="regForm-input1" type="email" required />
              </div>
              <div className="regForm-input">
                <label htmlFor="">Password</label>
                <i className="fa-solid regPwd-icon fa-lock" />
                <input
                  placeholder=""
                  className="regForm-input2"
                  type="password"
                  required
                />
              </div>
            </div>
            <div className="regForm-links">
              <p>
                Already have an account?{' '}
                <Link to="/" className="regForm-link">
                  Login
                </Link>
              </p>
              <button className="regForm-btn">
                Register
                <i className="fa-solid regForm-icon2 fa-arrow-right" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
