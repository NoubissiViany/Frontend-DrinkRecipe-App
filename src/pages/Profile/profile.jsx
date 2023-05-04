/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import './profile.css';
import { useNavigate } from 'react-router-dom';
import AuthGuard from '../Components/AuthGuard';
import { updateUser } from '../../api/auth';
import { deleteToken } from '../../utils';

function Profile({ user }) {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const values = Object.fromEntries(data.entries());
    const update = { id: user.id, ...values };
    await updateUser(update);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const Logout = () => {
    deleteToken();
    navigate('/login');
    window.location.reload();
  };
  return (
    <div className="bodyContainer">
      <div className="profile-container">
        <div className="profile-header">
          <i className="fa-solid profile-icon1 fa-user" />
          <h2>Edit Profile!</h2>
        </div>
        <div className="formContainer">
          <form action="" onSubmit={handleSubmit}>
            <div className="profile-inputs">
              <div className="profile-input">
                <label htmlFor="">First Name</label>
                <i className="fa-solid profileName-icon fa-user" />
                <input
                  className="profile-input1"
                  name="firstName"
                  type="text"
                  defaultValue={user.firstName}
                />
              </div>
              <div className="profile-input">
                <label htmlFor="">Last Name</label>
                <i className="fa-solid profileName-icon fa-user" />
                <input
                  className="profile-input1"
                  name="lastName"
                  type="text"
                  defaultValue={user.lastName}
                />
              </div>
              <div className="profile-input">
                <label htmlFor="">Phone</label>
                <i className="fa-sharp fa-solid profileEmail-icon fa-square-phone" />
                <input
                  className="profile-input1"
                  name="phone"
                  type="number"
                  defaultValue={user.phone}
                />
              </div>
              <div className="profile-input">
                <label htmlFor="">Email</label>
                <i className="fa-solid profileEmail-icon fa-envelope" />
                <input
                  className="profile-input1"
                  name="emailAddress"
                  type="email"
                  defaultValue={user.emailAddress}
                  disabled
                />
              </div>
              <div className="profile-input">
                <label htmlFor="">Password</label>
                <input
                  placeholder=""
                  className="profile-input2"
                  type="password"
                  name="password"
                  defaultValue={user.password}
                  disabled
                />
              </div>
            </div>
            <button type="submit" className="profile-btn">
              {loading ? (
                <i className="fa loading-icon fa-circle-o-notch fa-spin" />
              ) : (
                'Edit Info'
              )}
              {!loading && (
                <i className="fa-solid profile-icon2 fa-arrow-right" />
              )}
            </button>
          </form>
        </div>
      </div>
      <div className="apiKey-container">
        <h2>Hello {user.lastName} your API Key is : </h2>
        <p className="apikey-p1">{user.apikey}</p>
        <p className="apikey-p2">
          This api key will help you to access all read endpoints of our API.{' '}
        </p>
        <button onClick={Logout} className="apiKey-Btn" type="submit">
          Logout
          <i className="fa-solid fa-arrow-right-from-bracket" />
        </button>
      </div>
    </div>
  );
}

export default AuthGuard(Profile);
