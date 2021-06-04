import React, { Suspense } from 'react';
import useNearScreen from 'hooks/useNearScreen';
import Spinner from 'components/Spinner/Spinner';

const TrendingSearches = React.lazy(() => import('./TrendingSearches1'));

export default function LazyTrending() {
  const { isNearScreen, fromRef } = useNearScreen();

  return (
    <div ref={fromRef}>
      <Suspense fallback={<Spinner />}>
        {isNearScreen ? <TrendingSearches /> : <Spinner />}
      </Suspense>
    </div>
  );
}
