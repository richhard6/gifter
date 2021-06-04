import React from 'react';
import { Redirect, Link } from 'wouter';
import Gif from 'components/Gif/Gif';
import useSingleGif from 'hooks/useSingleGif';
import Spinner from 'components/Spinner/Spinner';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import './Detail.css';
import { Helmet } from 'react-helmet';

export default function Detail({ params }) {
  const { gif, isLoading, isError } = useSingleGif({ id: params.id });

  if (isLoading) {
    return (
      <>
        <Helmet>
          <title>Loading...</title>
        </Helmet>
        <Spinner />
      </>
    );
  }

  if (isError) return <Redirect to="/404" />;
  if (!gif) return null;

  return (
    <>
      <Helmet>
        <title>{gif.title} || Gifter </title>
      </Helmet>
      <h3 className="App-title">{gif.title}</h3>
      <div className="gif__container">
        <Gif {...gif} />
      </div>
      <div className="icon__container">
        <Link to="/">
          <ArrowBackIosIcon /> Go back
        </Link>
      </div>
    </>
  );
}
