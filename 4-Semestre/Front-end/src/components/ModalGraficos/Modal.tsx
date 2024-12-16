// Inside your ModalT component file

import React from 'react';
import Close from '../../assets/icons/close.svg'
import "./style.css"

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const ModalT: React.FC<ModalProps> = ({ open, onClose, children }) => {
  if (!open) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-close" onClick={onClose}><img src={Close} alt=""/> </div>
        {children}
      </div>
    </div>
  );
};

export default ModalT;
