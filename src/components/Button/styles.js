import styled from '@emotion/styled';
import { Link as LinkWouter } from 'wouter';

const SIZES = {
  small: '1rem',
  medium: '2rem',
  large: '3rem',
};

export const Link = styled(LinkWouter)`
  padding: 1.2em;
  background: #71c9ce;
  transition: all ease-in-out 0.8s;
  border: 1px solid #71c9ce;
  border-radius: 2px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: ${(props) => SIZES[props.size]};
  width: ${(props) => props.width && props.width};

  &:hover {
    background: #7cdadf;
    transform: scale(1.2);
  }

  [disabled] {
    opacity: 0.3;
    pointer-events: none;
  }
`;

export const StyledButton = Link.withComponent('button');
