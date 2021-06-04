import React, { useState, useEffect } from 'react';

import useUser from 'hooks/useUser';

import Modal from 'components/Modal';

import Login from 'components/Login/Login';

import './Fav.css';

function Fav({ id }) {
  const { isLogged, addFav, favs } = useUser();
  const [showModal, setShowModal] = useState(false);

  const isFaved = favs.some((favId) => favId === id);
  const [label, emoji] = isFaved
    ? ['Remove Gif from favorites', '❌']
    : ['Add Gif to favorites', '💙'];

  const handleClick = () => {
    if (!isLogged) return setShowModal(true);
    addFav({ id });
  };

  const handleClose = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (isLogged) {
      setShowModal(false);
    }
  }, [isLogged]);

  return (
    <>
      <button className="gf-Fav" onClick={handleClick}>
        <span aria-label={label} role="img">
          {emoji}
        </span>
      </button>
      {showModal && (
        <Modal onClose={handleClose}>
          <Login />
        </Modal>
      )}
    </>
  );
}

export default Fav;
