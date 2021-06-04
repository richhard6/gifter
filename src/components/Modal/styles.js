import styled from '@emotion/styled';

export const ModalBody = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(4px);
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  z-index: 21;
`;

export const ModalContent = styled.div`
  background: #39a6a3;
  width: 300px;
  padding: 10px 20px;
  height: 80vh;
  margin: 10vh auto;
  position: relative;
`;
