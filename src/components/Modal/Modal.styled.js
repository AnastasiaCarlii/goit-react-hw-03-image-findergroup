import styled from '@emotion/styled';

export const ModalRoot = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1400;
`;

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;

export const ModalContainer = styled.div`
  height: 100%;
  outline: 0;
  overflow-x: hidden;
  overflow-y: auto;
  text-align: center;

  &::after {
    width: 0;
    height: 100%;
    content: '';
    display: inline-block;
    vertical-align: middle;
  }
`;

export const ModalContent = styled.div`
  max-width: 800px;
  display: inline-block;
  text-align: left;
  vertical-align: middle;
  background: #c4c3c3;
  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.25);
  margin: 1.2rem;
  padding: 1px;

  position: relative;
  overflow-y: auto;

  img {
    max-width: 100%;
    height: auto;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  border: none;
  padding: 0;
  cursor: pointer;
  background-color: transparent;
  display: flex;
`;
