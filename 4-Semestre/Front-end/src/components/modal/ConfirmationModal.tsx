import React from "react";
import "./style.css";   

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="confirmationModalOverlay">
      <div className="confirmationModalContent">
        <p>Você deseja realmente excluir essa estação?</p>
        <button onClick={onConfirm}>Sim</button>
        <button onClick={onClose}>Não</button>
      </div>
    </div>
  );
};

export default ConfirmationModal;
