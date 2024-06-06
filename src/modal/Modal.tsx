import React from 'react';
import ReactDOM from 'react-dom';
import { ModalClose, ModalContent, ModalOverlay } from './styles';
import { ModalProps } from '../types';

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <>
      <ModalOverlay onClick={onClose}>
        <ModalContent>
          <ModalClose onClick={onClose}>&times;</ModalClose>
          {children}
        </ModalContent>
      </ModalOverlay>
    </>,
    document.body
  );
};

export default Modal;
