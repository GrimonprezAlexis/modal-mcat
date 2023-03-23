import React, { Fragment, useState } from "react";
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
            modalName="pearson"
            headerTitle="Time Expired"
            headerBackground="red"
            isOpen={showModal}
            onClose={handleCloseModal}
          >
            {{
              body: {
                icon: "driver-warning-icon",
                children: (
                  <Fragment>
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
                  </Fragment>
                ),
              },
              footer: (
                <Fragment>
                  <a
                    className="confirm-end-section driver-btn btn-small actionable hotkey-underline hotkey"
                    href={"/"}
                    role="button"
                  >
                    Yes
                  </a>
                  <a
                    className="cancel-end-section driver-btn btn-small actionable hotkey-underline hotkey"
                    href={"/"}
                    role="button"
                  >
                    No
                  </a>
                </Fragment>
              ),
            }}
          </Modal>
        )}
      </div>
    </>
  );
};

export default App;
