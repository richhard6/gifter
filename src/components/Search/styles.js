import styled from '@emotion/styled';

const common = {
  backgroundColor: 'white',
  marginLeft: '10px',
  border: '1px solid #71c9ce',
  borderRadius: '2px',
};

export const Form = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5em;
  position: sticky;
  top: 0;
  max-height: 3rem;
  z-index: 20;
  background-color: #cbf1f5;
  flex-wrap: wrap;
  height: 100%;
`;

export const Select = styled.select`
  ${common}
`;

export const Input = styled.input`
  ${common}
  padding:1.2em;
`;
