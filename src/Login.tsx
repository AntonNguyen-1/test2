import React, { useContext, useState } from 'react';
import { UserContext } from './UserContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const { setUser } = useContext(UserContext)!;

  const handleLogin = () => {
    setUser({ username, isLoggedIn: true });
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
