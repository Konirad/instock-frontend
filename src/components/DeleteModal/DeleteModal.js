import React from "react";
import Button from "../Button/Button.js";

import "./DeleteModal.scss";
import "../../styles/partials/_variables.scss";

const sampleName = "sample name";

function DeleteModal() {
  const handleCancelClick = () => {
    alert("Button Clicked!");
  };

  const handleDeleteClick = () => {
    alert("Button Clicked!");
  };
  return (
    <div className="delete-modal">
      <p className="delete-modal__header">Delete {sampleName}?</p>
      <p className="delete-modal__body">
        Please confirm that you’d like to delete Television from the inventory
        list. You won’t be able to undo this action. 
      </p>
      <div className="delete-modal__button-container">
        <Button
          text="Cancel"
          style="secondary"
          onClick={handleCancelClick}
          icon="+"
        />
        <Button
          text="Delete"
          style="nav"
          onClick={handleDeleteClick}
        />
      </div>
    </div>
  );
}

export default DeleteModal;
