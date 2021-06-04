import React from 'react';
import './Gif.css';
import { Link } from 'wouter';
import './Gif.css';
import Fav from 'components/Fav/Fav';

function Gif({ title, id, url }) {
  return (
    <div className="Gif">
      <div className="Gif-buttons">
        <Fav id={id}></Fav>
      </div>

      <Link to={`/gif/${id}`} className="Gif-link">
        <h4>{title}</h4>
        <img src={url} alt={title} />
      </Link>
    </div>
  );
}

export default React.memo(Gif);
