import React from 'react';
import { useLocation } from 'wouter';
import './Search.css';
import useForm from 'hooks/useForm';
import Button from 'components/Button/Button';
import { Form, Select, Input } from './styles';
const RATINGS = ['g', 'pg', 'pg-13', 'r'];

const TYPES = ['gifs', 'stickers'];

function Search({
  initialKeyword = '',
  initialRating = RATINGS[0],
  initialType = TYPES[0],
}) {
  const [_, pushLocation] = useLocation();

  const { keyword, rating, type, changeKeyword, changeRating, changeType } =
    useForm({
      initialKeyword,
      initialRating,
      initialType,
    });

  const onSubmit = ({ keyword }) => {
    if (keyword !== '') {
      pushLocation(`/search/${keyword}/${rating}/${type}`);
    }
  };

  const handleChange = (evt) => {
    changeKeyword({ keyword: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit({ keyword });
  };

  const handleChangeRating = (evt) => {
    changeRating({ rating: evt.target.value });
  };

  const handleChangeType = (evt) => {
    changeType({ type: evt.target.value });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Button>Search</Button>
      <Input
        type="text"
        onChange={handleChange}
        value={keyword}
        placeholder="Search a gif "
      />
      <Select
        value={rating}
        onChange={handleChangeRating}
        className="form__select"
      >
        <option disabled> Rating:</option>
        {RATINGS.map((rating) => (
          <option key={rating}>{rating}</option>
        ))}
      </Select>
      <Select value={type} onChange={handleChangeType}>
        <option disabled> Type:</option>
        {TYPES.map((type) => (
          <option key={type}>{type}</option>
        ))}
      </Select>
    </Form>
  );
}

export default Search;
