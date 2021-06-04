import React from 'react';
import { Link, StyledButton } from './styles';

function Button({ children, href, size = 'small', onClick, width, disabled }) {
  return href ? (
    <Link size={size} href={href}>
      {children}
    </Link>
  ) : (
    <StyledButton
      onClick={onClick}
      size={size}
      width={width}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
