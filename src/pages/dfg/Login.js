import React, { useState, useContext } from 'react';
import UserContext from '../../UserContext';

function Login() {
  const { name, setName } = useContext(UserContext);
  const [le, setLe] = useState('');

  const handleLogin = () => {
    if (!name.some(user => user.username === le)) {
      // Username doesn't exist, proceed with login logic
      console.log("Success");
    } else {
      // Username already exists, display an error or take other actions
      console.log('Username already exists. Please choose a different username.');
    }
  };

  return (
    <div>
      <input type="text" value={le} onChange={(e) => setLe(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
