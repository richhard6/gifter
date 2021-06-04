import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'components/Button/Button';
import CloseIcon from '@material-ui/icons/Close';
import { ModalBody, ModalContent } from './styles';

function Modal({ children, onClose }) {
  return (
    <ModalBody>
      <ModalContent>
        <Button onClick={onClose}>
          <CloseIcon />
        </Button>
        {children}
      </ModalContent>
    </ModalBody>
  );
}

export default function ModalPortal({ children, onClose }) {
  return ReactDOM.createPortal(
    <Modal onClose={onClose}>{children}</Modal>,
    document.getElementById('root')
  );
}
