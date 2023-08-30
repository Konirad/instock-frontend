import React from "react";
import Button from "../Button/Button.js";
import "./DeleteModal.scss";

const DeleteModal = ({ sampleName, onCancelClick, onDeleteClick }) => {
  return (
    <div className="delete-modal">
      <div>
        <p className="delete-modal__header">Delete {sampleName}?</p>
        <p className="delete-modal__body">
          Please confirm that you’d like to delete {sampleName} from the {sampleName}
          list. You won’t be able to undo this action.
        </p>
      </div>
      <div className="delete-modal__button-container">
        <Button text="Cancel" style="secondary" onClick={onCancelClick} />
        <Button text="Delete" style="delete" onClick={onDeleteClick} />
      </div>
    </div>
  );
};

export default DeleteModal;
