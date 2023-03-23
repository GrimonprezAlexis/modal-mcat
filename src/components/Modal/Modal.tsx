import React, { useState, useEffect, Fragment } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

interface ModalProps {
  modalId: string;
  modalName: string; //used for apply style
  ariaLabel?: string;
  headerBackground?: string;
  headerTitle: string;
  isOpen: boolean;
  onClose: () => void;
  children: {
    body: {
      icon?: string;
      children: React.ReactNode;
    };
    footer?: React.ReactNode;
  };
}

const Modal: React.FC<ModalProps> = ({
  modalId,
  modalName,
  ariaLabel,
  headerBackground,
  headerTitle,
  isOpen,
  onClose,
  children,
}) => {
  const [show, setShow] = useState(isOpen);

  useEffect(() => {
    setShow(isOpen);
  }, [isOpen]);

  const handleClose = () => {
    setShow(false);
    onClose();
  };

  if (!show) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div
        id={modalId}
        className={`modal ${modalName}`}
        tabIndex={-1}
        role="dialog"
        aria-hidden="false"
        aria-label={ariaLabel}
      >
        <div className="modal-inner" tabIndex={0}>
          <div
            className="modal-header"
            style={{ background: headerBackground }}
          >
            <h1>{headerTitle}</h1>
            <button
              type="button"
              className="close-button"
              data-dismiss="modal"
              aria-label="Dismiss the modal"
              onClick={handleClose}
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            {children?.body?.icon && (
              <div className={`modal-icon ${children.body.icon}`}></div>
            )}
            <div className="modal-message">{children?.body?.children}</div>
          </div>

          {children?.footer && (
            <div className="modal-footer clearfix">{children.footer}</div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
