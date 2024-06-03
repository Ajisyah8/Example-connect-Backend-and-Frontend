// src/App.js
import React, { useState } from 'react';
import { login, register } from './api'; // Pastikan Anda sudah membuat file api.js dengan fungsi login dan register

function Example() {
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerUsername, setRegisterUsername] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const handleLogin = async () => {
    const response = await login(loginUsername, loginPassword);
  };

  const handleRegister = async () => {
    const response = await register(registerUsername, registerPassword);
  };

  return (
    <div>
      <div>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={loginUsername}
          onChange={(e) => setLoginUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
      <div>
        <h2>Register</h2>
        <input
          type="text"
          placeholder="Username"
          value={registerUsername}
          onChange={(e) => setRegisterUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={registerPassword}
          onChange={(e) => setRegisterPassword(e.target.value)}
        />
        <button onClick={handleRegister}>Register</button>
      </div>
      {/* {message && <p>{message}</p>} */}
    </div>
  );
}

export default Example;
