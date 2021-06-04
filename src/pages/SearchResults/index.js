import React, { useRef, useEffect, useCallback } from 'react';
import Spinner from 'components/Spinner/Spinner';
import ListOfGifs from 'components/ListOfGifs/ListOfGifs';
import Search from 'components/Search/Search';
import debounce from 'just-debounce-it';

import { useGifs } from 'hooks/useGifs';
import useNearScreen from 'hooks/useNearScreen';
import { Helmet } from 'react-helmet';
export default function SearchResults({ params }) {
  const { keyword, rating, type } = params;

  console.log(type);

  const { loading, gifs, setPage } = useGifs({ keyword, rating, type });

  const externalRef = useRef();
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false,
  });

  const title = gifs ? `${gifs.length} resultados de ${keyword}` : '';

  const debouceHandleNextPage = useCallback(
    debounce(() => setPage((prevPage) => prevPage + 1), 1000),
    []
  );

  useEffect(() => {
    console.log(isNearScreen);
    if (isNearScreen) debouceHandleNextPage();
  }, [debouceHandleNextPage, isNearScreen]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Helmet>
            <title>{title}</title>
            <meta name="description" content={title}></meta>
          </Helmet>
          <Search
            initialKeyword={keyword}
            initialRating={rating}
            initialType={type}
          ></Search>

          <div className="App-wrapper">
            <h3 className="App-title">{decodeURI(keyword)}</h3>
            <ListOfGifs gifs={gifs} />
            <div id="visor" ref={externalRef}></div>
          </div>
        </>
      )}
    </>
  );
}
