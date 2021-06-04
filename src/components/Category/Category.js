import React from 'react';
import {
  CategoryLink,
  CategoryList,
  CategoryListItem,
  CategoryTitle,
} from './styles';
import './Category.css';

function Category({ name, options = [] }) {
  return (
    <section className="category__container">
      <CategoryTitle>{name}</CategoryTitle>
      <CategoryList>
        {options.map((singleOption, index) => (
          <CategoryListItem key={singleOption} index={index}>
            <CategoryLink to={`/search/${singleOption}`}>
              {singleOption}
            </CategoryLink>
          </CategoryListItem>
        ))}
      </CategoryList>
    </section>
  );
}

export default Category;
