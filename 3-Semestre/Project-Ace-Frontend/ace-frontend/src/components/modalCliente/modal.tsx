import React, { FC, ReactNode } from "react";
import { createPortal } from "react-dom";
import "./modal.css"

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
  }


  const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
    const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
      if (event.target === event.currentTarget) {
        onClose();
      }
    };
  
    const modal = (
      <div className={`modal ${isOpen ? "is-open" : ""}`} onClick={handleOverlayClick}>
        <div className="modal-content">{children}</div>
      </div>
    );
  
    return createPortal(modal, document.body);
  };
  
  export default Modal;
  