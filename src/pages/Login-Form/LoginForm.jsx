/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginForm.css';
import { login } from '../../api/auth';
import { saveToken } from '../../utils';

function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const values = Object.fromEntries(
      new FormData(event.currentTarget).entries()
    );
    try {
      const { data } = await login(values.email, values.password);
      saveToken(data.token);
      console.log(values.email, values.password, data.token);
      navigate('/profile');
    } catch (e) {
      if (e.response.status === 400) {
        setError('Invalid email or password');
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="form-container">
      <div className="form-header">
        <i className="fa-solid icon1 fa-arrow-right-to-bracket" />
        <h2>Welcome!</h2>
        <p>Sign into your account</p>
      </div>
      <div>
        <form action="" onSubmit={handleSubmit}>
          <div className="form-inputs">
            <div className="form-input">
              <label htmlFor="">Email</label>
              <i className="fa-solid email-icon fa-envelope" />
              <input
                className="form-input1"
                name="email"
                type="email"
                required
              />
            </div>
            <div className="form-input">
              <label htmlFor="">Password</label>
              <i className="fa-solid pwd-icon fa-lock" />
              <input
                placeholder=""
                className="form-input2"
                name="password"
                type="password"
                required
              />
            </div>
            {isLoading && <p>Loading...</p>}
            {error && <p className="error">{error}</p>}
          </div>
          <div className="form-links">
            <p>
              No account?{' '}
              <Link to="/registration" className="form-link">
                Signup
              </Link>
            </p>
            <button type="submit" className="form-btn">
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
