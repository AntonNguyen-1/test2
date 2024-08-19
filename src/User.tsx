import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import { Navigate } from 'react-router-dom';

const User = () => {
  const { user } = useContext(UserContext)!;

  if (!user || !user.isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <h2>Welcome, {user.username}</h2>
    </div>
  );
};

export default User;
