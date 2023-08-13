import React from "react";
import {
  ModalOverlay,
  ModalContent,
  CloseButton,
} from "./styles/global-modal-styling";

const GlobalModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>Close</CloseButton>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};

export default GlobalModal;
