import React, { useState } from 'react';
import { Modal } from 'react-responsive-modal';
import {
  ModalRoot,
  Overlay,
  ModalContainer,
  ModalContent,
  CloseButton,
} from './Modal.styled';

export const ModalWindow = ({ largeImage, largeImageStateReset }) => {
  const [open, setOpen] = useState(true);

  const onCloseModal = () => {
    if (largeImage) {
      largeImageStateReset();
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
            <img src={largeImage} alt="" />
          </ModalContent>
        </ModalContainer>
      </ModalRoot>
    </Modal>
  );
};
