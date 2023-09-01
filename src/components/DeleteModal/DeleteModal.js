import React, { useState } from "react";
import Button from "../Button/Button.js";
import "./DeleteModal.scss";
import closeIcon from "../../assets/Icons/close-24px.svg";

const DeleteModal = ({ sampleName, onDeleteClick }) => {
  const [showModal, setShowModal] = useState(false);

  const handleDeleteClick = async () => {
    try {
      const response = await fetch(`/api/inventory/${sampleName}`, {
        method: "DELETE",
      });

      if (response.status === 204) {
        onDeleteClick();
      } else if (response.status === 404) {
      }
    } catch (error) {
      return <h3>It seems there was an error on our servers</h3>;
    }
  };

  const handleCancelClick = () => {
    setShowModal(false);
  };

  const modalClasses = `delete-modal ${showModal ? "visible" : "hidden"}`;

  return (
    <>
      <div className="123" onClick={() => setShowModal(true)}>
        test modal
      </div>

      <div className={modalClasses}>
        <img
          className="closeIcon"
          src={closeIcon}
          alt="an x icon indicating a close functionality"
          onClick={handleCancelClick}
        />
        <div>
          <p className="delete-modal__header">Delete {sampleName}?</p>
          <p className="delete-modal__body">
            Please confirm that you’d like to delete {sampleName} from the{" "}
            {sampleName}
            list. You won’t be able to undo this action.
          </p>
        </div>
        <div className="delete-modal__button-container">
          <Button text="Cancel" style="secondary" onClick={handleCancelClick} />
          <Button text="Delete" style="delete" onClick={handleDeleteClick} />
        </div>
      </div>
    </>
  );
};

export default DeleteModal;
