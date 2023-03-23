## Modal Component
The Modal component is a reusable component that can be used to display modal windows on a webpage. It can be customized with different header backgrounds and modal styles.


```react
import React, { useState } from 'react';
import Modal from 'agr-custom-modal';

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Open Modal</button>
        <Modal
        modalId="end-section-modal"
        modalName="pearson"
        ariaLabel="Time Expired"
        headerBackground="red"
        headerTitle="Time Expired"
        isOpen={showModal}
        onClose={handleCloseModal}
        >
        <Modal.Body icon="driver-warning-icon">
            <p>
            You have chosen to end this exam section, but you have 59 incomplete questions.
            Select “Yes” to confirm that you wish to end this exam section, or “No” to return to the Section Review.
            </p>
            <p>
            If you select “Yes”, you will NOT be able to return to this section.
            </p>
        </Modal.Body>
        <Modal.Footer>
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
        </Modal.Footer>
        </Modal>

    </div>
  );
}

export default App;
```

## Props

| Prop  | Type  | Required | Description
| :------------ |:---------------:| -----:| ------------:|
| modalId      | string | Yes | ID of the modal container
| modalName      | string | No | used to apply custom styles to the modal
| ariaLabel      | string | No | accessible label for the modal
| headerBackground      | string | Yes | representing the background color of the modal header.
headerTitle: (required) a string representing the title of the modal header.
| headerTitle      | string | Yes | Title of the modal in the header
| isOpen      | boolean        |   Yes | controls whether the modal is visible or not
| onClose | function        |    Yes | Callback function that is called when the Modal is closed
| children | node        |    No | The content of the Modal
| draggable | boolean        |    No | Feature of dragging
| innerBackground | string        |    No | Customize the content of modal (manualy reflect color, and border on `modal.footer` fragment action)
| innerColor | string        |    No | Customize the text color (manualy reflect color, and border on `modal.footer` fragment action)
----

In this example, the Modal component is used to display a modal window with a warning icon and two buttons, "Yes" and "No". The Modal.Body component contains the text of the warning message.