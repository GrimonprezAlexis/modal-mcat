import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

import Modal from "./components/Modal/Modal";

const App = () => {
  const title = "Welcome to React Application";
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <h1>{title}</h1>

      <div>
        <button onClick={handleOpenModal}>Open Modal</button>
        {showModal && (
          <Modal
            modalId="end-section-modal"
            modalTitle="End Section"
            modalName="pearson"
            isOpen={showModal}
            onClose={handleCloseModal}
          >
            {{
              body: (
                <>
                  <div className="driver-warning-icon"></div>
                  <div className="message">
                    <p>
                      You have chosen to end this exam section, but you have 59
                      incomplete questions. Select “Yes” to confirm that you
                      wish to end this exam section, or “No” to return to the
                      Section Review.
                    </p>
                    <p>
                      If you select “Yes”, you will NOT be able to return to
                      this section.
                    </p>
                  </div>
                </>
              ),
              footer: (
                <>
                  <Link
                    className="confirm-end-section driver-btn btn-small actionable hotkey-underline hotkey"
                    to="#"
                    role="button"
                  >
                    Yes
                  </Link>
                  <Link
                    className="cancel-end-section driver-btn btn-small actionable hotkey-underline hotkey"
                    to="#"
                    role="button"
                  >
                    No
                  </Link>
                  {/* <button onClick={() => setShowModal(false)}>
                    Close modal
                  </button> */}
                </>
              ),
            }}
          </Modal>
        )}
      </div>
    </>
  );
};

export default App;
