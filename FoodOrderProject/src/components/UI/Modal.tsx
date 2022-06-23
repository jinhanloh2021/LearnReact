import React from 'react';
import ReactDOM from 'react-dom';
import './modal.scss';

type Props = {
  children?: JSX.Element[];
  onCloseCart: () => void;
};

const portalElement = document.getElementById('overlays') || new Element();

const Backdrop = ({ onCloseCart }: Props) => {
  return <div className="backdrop" onClick={onCloseCart}></div>;
};

const ModalOverlay = (props: any) => {
  return (
    <div className="modal">
      <div className="content">{props.children}</div>
    </div>
  );
};

export default function Modal({ children, onCloseCart }: Props) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onCloseCart={onCloseCart} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
}
