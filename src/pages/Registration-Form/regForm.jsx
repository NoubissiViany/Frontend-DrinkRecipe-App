/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../../api/auth';
import './regForm.css';

function RegistrationForm() {
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const values = Object.fromEntries(data.entries());
    await register(values);
    console.log(values);
    navigate('/login');
  };
  return (
    <div>
      <div className="regForm-container">
        <div className="regForm-header">
          <i className="fa-solid regForm-icon1 fa-user" />
          <h2>Creat Account!</h2>
        </div>
        <div className="formContainer">
          <form action="" onSubmit={handleSubmit}>
            <div className="regForm-inputs">
              <div className="regForm-input">
                <label htmlFor="">First Name</label>
                <i className="fa-solid regName-icon fa-user" />
                <input
                  className="regForm-input1"
                  name="firstName"
                  type="text"
                  required
                />
              </div>
              <div className="regForm-input">
                <label htmlFor="">Last Name</label>
                <i className="fa-solid regName-icon fa-user" />
                <input
                  className="regForm-input1"
                  name="lastName"
                  type="text"
                  required
                />
              </div>
              <div className="regForm-input">
                <label htmlFor="">Email</label>
                <i className="fa-solid regEmail-icon fa-envelope" />
                <input
                  className="regForm-input1"
                  name="emailAddress"
                  type="email"
                  required
                />
              </div>
              <div className="regForm-input">
                <label htmlFor="">Phone</label>
                <i className="fa-sharp fa-solid regEmail-icon fa-square-phone" />
                <input
                  className="regForm-input1"
                  name="phone"
                  type="number"
                  required
                />
              </div>
              <div className="regForm-input">
                <label htmlFor="">Password</label>
                <i className="fa-solid regPwd-icon fa-lock" />
                <input
                  placeholder=""
                  className="regForm-input2"
                  type="password"
                  name="password"
                  required
                />
              </div>
            </div>
            <div className="regForm-links">
              <p>
                Already have an account?{' '}
                <Link to="/login" className="regForm-link">
                  Login
                </Link>
              </p>
              <button type="submit" className="regForm-btn">
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
