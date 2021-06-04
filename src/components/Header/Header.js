import React from 'react';
import './Header.css';
import { Link, useRoute } from 'wouter';
import useUser from 'hooks/useUser';
function Header() {
  const { isLogged, logout } = useUser();

  const [loginMatch] = useRoute('/login');

  const [registerMatch] = useRoute('/register');

  const handleClick = (e) => {
    e.preventDefault();
    logout();
  };

  const renderLoginButtons = ({ isLogged }) => {
    return isLogged ? (
      <Link onClick={handleClick} href="#" className="login">
        Logout
      </Link>
    ) : (
      <>
        <Link to="/login" className="login">
          Login
        </Link>
      </>
    );
  };

  const renderRegisterButton = ({ isLogged }) => {
    return isLogged ? (
      ''
    ) : (
      <Link to="/register" className="register">
        Register
      </Link>
    );
  };

  const register = registerMatch ? '' : renderRegisterButton({ isLogged });

  const content = loginMatch ? (
    <Link to="/" className="login">
      Home
    </Link>
  ) : (
    renderLoginButtons({ isLogged })
  );

  return (
    <>
      <header className="header">
        <Link to={`/`} className="Gif-link">
          <img
            className="logo"
            src="https://www.onlygfx.com/wp-content/uploads/2015/12/circle-logo-template.jpg"
            alt=""
          />
        </Link>
        <h1 className="app_name">Gifter</h1>

        {content}
        {register}
      </header>
    </>
  );
}

export default Header;
