import React, { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import useUser from 'hooks/useUser';
import Button from 'components/Button/Button';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [, navigate] = useLocation();
  const { isLoginLoading, hasLoginError, login, isLogged } = useUser();

  useEffect(() => {
    if (isLogged) navigate('/');
  }, [isLogged, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ username, password });
  };
  return (
    <>
      {isLoginLoading && <strong>Checking credentials...</strong>}

      {!isLoginLoading && (
        <form className="form" onSubmit={handleSubmit}>
          <label>
            username
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="enter your username"
            />
          </label>
          <label>
            password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="enter your password"
            />
          </label>

          <Button width="100%">Login</Button>
        </form>
      )}
      {hasLoginError && <strong>Credentials are invalid</strong>}
    </>
  );
}

export default Login;
