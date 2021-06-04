import React, { useEffect } from 'react';
import ListOfGifs from 'components/ListOfGifs/ListOfGifs';
import { useGifs } from 'hooks/useGifs';
import Search from 'components/Search/Search';
import TrendingSearches from 'components/TrendingSearches/TrendingSearches';
import './style.css';
import { Helmet } from 'react-helmet';

function Home() {
  const { gifs } = useGifs();

  return (
    <>
      <Helmet>
        <title>Home | Gifter</title>
        <meta name="description" content="Gifter Homepage"></meta>
      </Helmet>
      <Search />
      <div className="App-wrapper">
        <div className="App-main">
          <div className="App-results">
            <p className="last_search"> Last search </p>
            <ListOfGifs gifs={gifs} />
          </div>
          <div className="App-category">
            <TrendingSearches />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
