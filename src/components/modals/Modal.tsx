import React, { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
  maxWidth?: string;
}

const Modal: React.FC<ModalProps> = ({
  children,
  onClose,
  maxWidth = "500px",
}) => {
  return (
    <div
      className="food-modal-overlay"
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "flex-start", // align to top
        justifyContent: "center",
        zIndex: 1000,
        paddingTop: "2.5rem", // space from the very top
        paddingLeft: "1rem",
        paddingRight: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <div
        className="food-modal"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "white",
          borderRadius: "12px",
          padding: "2rem",
          maxWidth,
          width: "100%",
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
