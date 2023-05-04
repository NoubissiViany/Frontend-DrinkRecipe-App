/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-shadow */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser } from '../../api/auth';

let currentUser;

function AuthGuard(Component) {
  function Guard(props) {
    const [user, setUser] = useState(currentUser);
    const navigate = useNavigate();

    useEffect(() => {
      if (user) return;
      getCurrentUser()
        .then((user) => {
          setUser(user);
          currentUser = user;
          console.log(user);
        })
        .catch(() => {
          navigate('/login', { replace: true });
        });
    }, [navigate, user]);
    return user ? <Component {...props} user={user} /> : <>loading..</>;
  }
  return Guard;
}

export default AuthGuard;
