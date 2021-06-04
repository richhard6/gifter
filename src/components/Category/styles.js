import styled from '@emotion/styled';
import { Link } from 'wouter';

const bps = {
  desktop: '@media screen and (min-width: 55rem)',
};

const colorSelector = (props) => {
  const colorIndex = (props.index % 5) + 1;
  return `background-color: var(--brand-color_${colorIndex})`;
};

export const CategoryTitle = styled.h3`
  color: var(--theme-body-text);
  font-weight: bold;
  margin-bottom: 0.7rem;
  margin-top: 0.6rem;

  ${bps.desktop} {
    text-align: right;
  }
`;

export const CategoryList = styled.ul`
  list-style-position: inside;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;

  ${bps.desktop} {
    justify-content: flex-end;
  }
`;

export const CategoryListItem = styled.li`
  list-style: none;
  padding: 0.3rem;
  margin: 0.2rem;
  font-size: 1.2rem;
  cursor: pointer;
  ${colorSelector};
`;

export const CategoryLink = styled(Link)`
  color: inherit;
  font-size: 1em;
  text-decoration: none;
  font-size: 1em;
  transition: color ease-in 0.1s;
`;
