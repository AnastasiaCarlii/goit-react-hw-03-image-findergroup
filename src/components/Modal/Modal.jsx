import React, { useState } from 'react';
import { Modal } from 'react-responsive-modal';
import {
  ModalRoot,
  Overlay,
  ModalContainer,
  ModalContent,
  CloseButton,
} from './Modal.styled';

export const ModalWindow = ({ showModal, showModalStateReset }) => {
  const [open, setOpen] = useState(true);

  const onCloseModal = () => {
    if (showModal) {
      showModalStateReset();
    }

    setOpen(false);
  };

  return (
    <Modal
      open={open}
      onClose={onCloseModal}
      center
      showCloseIcon={false}
      animationDuration={200}
    >
      <ModalRoot>
        <Overlay onClick={onCloseModal} />
        <ModalContainer>
          <ModalContent>
            <CloseButton onClick={onCloseModal}>Close</CloseButton>
            <img src={showModal} alt="" />
          </ModalContent>
        </ModalContainer>
      </ModalRoot>
    </Modal>
  );
};
