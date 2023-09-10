import React, { useState, useEffect } from "react";
import Button from "../Button/Button.js";
import "./DeleteModal.scss";
import closeIcon from "../../assets/Icons/close-24px.svg";

const DeleteModal = ({ itemName, onDeleteClick, onCancelClick, itemID }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true);
  }, []);

  const handleCancelClick = () => {
    setShowModal(false);
    onCancelClick();
  };

  const handleDeleteClick = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_URL}:${process.env.REACT_APP_PORT}/api/inventories/${itemID}`,
        {
          method: "DELETE",
        }
      );

      if (response.status === 204) {
        onDeleteClick(itemID);
        setShowModal(false);
      } else if (response.status === 404) {
        console.log("Item not found.");
      } else {
        console.error("Failed to delete item.");
      }
    } catch (error) {
      console.error("error", error);
    }
  };

  const modalClasses = `delete-modal ${showModal ? "visible" : "hidden"}`;

  return (
    <>
      {showModal && <div className="overlay"></div>}
      <div className={modalClasses}>
        <div className="delete-modal__spacer">
          <div>
            <img
              className="closeIcon"
              src={closeIcon}
              alt="an x icon indicating a close functionality"
              onClick={handleCancelClick}
            />
            <div>
              <p className="delete-modal__header">Delete {itemName}?</p>
              <p className="delete-modal__body">
                Please confirm that you’d like to delete {itemName} from the{" "}
                {itemName}
                list. You won’t be able to undo this action.
              </p>
            </div>
          </div>
          <div className="delete-modal__button-container">
            <Button
              text="Cancel"
              style="secondary"
              onClick={handleCancelClick}
            />
            <Button text="Delete" style="delete" onClick={handleDeleteClick} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteModal;
