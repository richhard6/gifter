import { useContext, useEffect, useState } from 'react';
import getGifs from '../services/getGifs';
import GifsContext from '../context/GifsContext';

const INITIAL_PAGE = 0;

export function useGifs(
  { keyword, rating, type } = {
    keyword: null,
    type: localStorage.getItem('lastType'),
  }
) {
  const [loading, setLoading] = useState(false);
  const [loadingNextPage, setLoadingNextPage] = useState(false);

  const [page, setPage] = useState(INITIAL_PAGE);
  const { gifs, setGifs, counter, setCounter } = useContext(GifsContext);

  // recuperamos la keyword del localStorage

  const keywordToUse = keyword || localStorage.getItem('lastKeyword');

  const typeCheck = counter < 2 ? 'gifs' : type;

  const typeToUse = typeCheck === 'undefined' ? 'gifs' : typeCheck;

  useEffect(
    function () {
      setLoading(true);
      getGifs({ keyword: keywordToUse, rating, type: typeToUse }).then(
        (gifs) => {
          setGifs(gifs);
          setLoading(false);
          // guardamos la keyword en el localStorage
          setCounter((counter) => counter + 1);
          localStorage.setItem('lastKeyword', keyword);
          localStorage.setItem('lastType', type);
        }
      );
    },
    [keyword, keywordToUse, rating, setGifs, type, typeToUse, setCounter]
  );

  useEffect(
    function () {
      if (page === INITIAL_PAGE) return;

      setLoadingNextPage(true);

      getGifs({ keyword: keywordToUse, page, rating, type: typeToUse }).then(
        (nextGifs) => {
          setGifs((prevGifs) => prevGifs.concat(nextGifs));
          setLoadingNextPage(false);
        }
      );
    },
    [keywordToUse, page, rating, setGifs, type, typeToUse]
  );

  return { loading, loadingNextPage, gifs, setPage };
}
