/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import React from 'react';
import { Link } from 'react-router-dom';
import './LoginForm.css';

function LoginForm() {
  return (
    <div className="form-container">
      <div className="form-header">
        <i className="fa-solid icon1 fa-arrow-right-to-bracket" />
        <h2>Welcome!</h2>
        <p>Sign into your account</p>
      </div>
      <div>
        <form action="">
          <div className="form-inputs">
            <div className="form-input">
              <label htmlFor="">Email</label>
              <i className="fa-solid email-icon fa-envelope" />
              <input className="form-input1" type="email" required />
            </div>
            <div className="form-input">
              <label htmlFor="">Password</label>
              <i className="fa-solid pwd-icon fa-lock" />
              <input
                placeholder=""
                className="form-input2"
                type="password"
                required
              />
            </div>
          </div>
          <div className="form-links">
            <p>
              No account?{' '}
              <Link to="/dashboard/registration" className="form-link">
                Signup
              </Link>
            </p>
            <button className="form-btn">
              Login
              <i className="fa-solid icon2 fa-arrow-right" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
