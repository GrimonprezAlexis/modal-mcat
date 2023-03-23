import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

import Modal from "./components/Modal/Modal";

const App = () => {
  const title = "Welcome to React Application";
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleOpenModal2 = () => setShowModal2(true);
  const handleOpenModal3 = () => setShowModal3(true);

  const handleCloseModal = () => setShowModal(false);
  const handleCloseModal2 = () => setShowModal2(false);
  const handleCloseModal3 = () => setShowModal3(false);

  return (
    <>
      <h1>{title}</h1>

      <div>
        <h2>Modal End section</h2>
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

      <h2>Modal time Expired (with draggable)</h2>
      <button onClick={handleOpenModal2}>Open Modal</button>
      {showModal2 && (
        <Modal
          modalId="time-expired"
          modalName="pearson"
          headerTitle="Time Expired"
          isOpen={showModal2}
          onClose={handleCloseModal2}
          draggable={true}
        >
          {{
            body: {
              icon: "driver-info-icon",
              children: (
                <Fragment>
                  <p>Your time has expired. Select OK to continue.</p>
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
                  OK
                </a>
              </Fragment>
            ),
          }}
        </Modal>
      )}

      <h2>Modal exam break (custom background header, inner, color)</h2>
      <button onClick={handleOpenModal3}>Open Modal</button>
      {showModal3 && (
        <Modal
          modalId="exam-section-break"
          modalName="exam-section-break"
          isOpen={showModal3}
          onClose={handleCloseModal3}
          draggable={true}
          headerBackground="#006DAA"
          innerBackground="#E1DECC"
          innerColor="black"
        >
          {{
            body: {
              icon: "driver-question-icon",
              children: (
                <Fragment>
                  <p>
                    You have two 10-minute breaks and one 30-minute break during
                    this exam.
                  </p>
                  <p>
                    This is your first optional break. The time you spend on
                    this break will not be deducted from your available exam
                    time, as long as your break does not exceed 10 minutes.
                  </p>
                  <p>
                    If you wish to take this break, select Yes and raise your
                    hand. The test administrator will come to you.
                  </p>
                  <p>
                    If you do NOT wish to take this break, select No to advance
                    to the next exam section.
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
                  style={{
                    background: "#E1DECC",
                    color: "black",
                    borderColor: "black",
                  }}
                >
                  Yes
                </a>
                <a
                  className="cancel-end-section driver-btn btn-small actionable hotkey-underline hotkey"
                  href={"/"}
                  role="button"
                  style={{
                    background: "#E1DECC",
                    color: "black",
                    borderColor: "black",
                  }}
                >
                  No
                </a>
              </Fragment>
            ),
          }}
        </Modal>
      )}
    </>
  );
};

export default App;
