import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

interface ModalProps {
  modalId: string;
  modalName: string;
  ariaLabel?: string;
  headerBackground?: string;
  headerTitle?: string;
  isOpen: boolean;
  onClose: () => void;
  children: {
    body: {
      icon?: string;
      background?: string;
      children: React.ReactNode;
    };
    footer?: React.ReactNode;
  };
  draggable?: boolean;
  innerBackground?: string;
  innerColor?: string;
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
  draggable,
  innerBackground,
  innerColor,
}) => {
  const [show, setShow] = useState(isOpen);
  const [dragging, setDragging] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setShow(isOpen);
  }, [isOpen]);

  const handleClose = () => {
    setShow(false);
    onClose();
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (draggable) {
      setDragging(true);
      setOffset({ x: e.clientX - pos.x, y: e.clientY - pos.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (dragging) {
      setPos({ x: e.clientX - offset.x, y: e.clientY - offset.y });
    }
  };

  const handleMouseUp = () => {
    if (draggable) {
      setDragging(false);
    }
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
        style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <div
          className="modal-inner"
          tabIndex={0}
          style={{ background: innerBackground, color: innerColor }}
        >
          <div
            className="modal-header"
            style={{ background: headerBackground }}
          >
            {headerTitle && (
              <>
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
              </>
            )}
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
