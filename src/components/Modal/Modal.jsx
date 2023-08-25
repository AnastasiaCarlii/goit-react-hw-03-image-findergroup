import { Modal } from 'react-responsive-modal';
import {
  ModalRoot,
  Overlay,
  ModalContainer,
  ModalContent,
  CloseButton,
} from './Modal.styled';

export const ModalWindow = ({ showModal, showModalStateReset }) => {
  const onCloseModal = () => {
    if (showModal) {
      showModalStateReset();
      console.log('onCloseModal called');
    }
  };

  return (
    <Modal
      open={showModal}
      onClose={onCloseModal}
      center
      showCloseIcon={false}
      animationDuration={200}
      styles={{ modal: { zIndex: 1000 } }}
    >
      <ModalRoot onClick={onCloseModal}>
        <Overlay />
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
