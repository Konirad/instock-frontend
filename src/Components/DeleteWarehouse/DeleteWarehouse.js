// DeleteWarehouse.js

import React from "react";
import Button from "../Button/Button.js";
import './DeleteWarehouse.scss'
import closeIcon from "../../assets/Icons/close-24px.svg";

function DeleteWarehouse({ itemID, sampleName, onDeleteClick, onCancelClick }) {
  const handleDeleteClick = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_URL}:${process.env.REACT_APP_PORT}/api/warehouses/${itemID}`,
        {
          method: "DELETE",
        }
      );

      console.log("DELETE URL:", `${process.env.REACT_APP_URL}:${process.env.REACT_APP_PORT}/api/warehouses/${itemID}`);
      console.log("Response status:", response.status);

      if (response.status === 204) {
        onDeleteClick();
      } else if (response.status === 404) {
        console.log("Item not found.");
      } else {
        console.error("Failed to delete item.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="overlay" onClick={onCancelClick}></div>

      <div className="delete-modal visible">
        <div className="delete-modal__spacer">
          <div>
            <img
              className="closeIcon"
              src={closeIcon}
              alt="an x icon indicating a close functionality"
              onClick={onCancelClick}
            />
            <div>
              <p className="delete-modal__header">Delete {sampleName}?</p>
              <p className="delete-modal__body">
                Please confirm that you’d like to delete {sampleName} from the
                {sampleName}
                .You won’t be able to undo this action.
              </p>
            </div>
          </div>
          <div className="delete-modal__button-container">
            <Button
              text="Cancel"
              style="secondary"
              onClick={onCancelClick}
            />
            <Button text="Delete" style="delete" onClick={handleDeleteClick} />
          </div>
        </div>
      </div>
    </>
  );
}

export default DeleteWarehouse;
