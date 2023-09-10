import React, { useState } from "react";
import "./InventoryItem.scss";
import TableLink from "../TableLink/TableLink";
import Tag from "../Tag/Tag";
import IconButton from "../IconButton/IconButton";
import DeleteModal from "../DeleteModal/DeleteModal";

function InventoryItem({ inventoryItem, page }) {
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);

  const handleDeleteInventoryItem = (itemID) => {
    setIsDeleteModalVisible(true);
  };

  const handleEditInventoryItem = () => {};

  const handleCancelDelete = () => {
    setIsDeleteModalVisible(false);
  };

  const [inventoryItems, setInventoryItems] = useState([]);

  const deleteModalProps = {
    itemName: inventoryItem.item_name,
    onDeleteClick: (itemID) => {
      handleDeleteInventoryItem(itemID);
      setInventoryItems((prevItems) =>
        prevItems.filter((item) => item.id !== itemID)
      );
    },
    onCancelClick: handleCancelDelete,
    itemID: inventoryItem.id,
  };

  return (
    inventoryItem && (
      <div className="inventory-item">
        <div className="info inventory-name-status-order column-extra-wide">
          <h4 className="info__label">Inventory Item</h4>
          <TableLink
            linkText={inventoryItem.item_name}
            linkPath={`/inventory/${inventoryItem.id}`}
          />
        </div>
        <div className="info column-extra-wide">
          <h4 className="info__label">Category</h4>
          <p className="info__detail">{inventoryItem.category}</p>
        </div>
        <div className="info inventory-name-status-order column-wide">
          <h4 className="info__label">Status</h4>
          <Tag statusText={inventoryItem.status} />
        </div>
        <div className="info column-normal">
          <h4 className="info__label">QTY</h4>
          <p className="info__detail">{inventoryItem.quantity}</p>
        </div>
        <div className="info filler"></div>
        {/* needed to make Warehouse items compatible  */}
        {page == "warehouse" ? (
          <></>
        ) : (
          <div className="info column-wide">
            <h4 className="info__label">Warehouse</h4>
            <p className="info__detail">{inventoryItem.warehouse_name}</p>
          </div>
        )}
        <div className="action-buttons column-normal">
          <IconButton
            actionType="delete"
            actionFunction={() => handleDeleteInventoryItem(inventoryItem.id)}
          />
          <IconButton
            actionType="edit"
            actionFunction={handleEditInventoryItem}
          />
        </div>
        {isDeleteModalVisible && (
          <DeleteModal
            itemName={inventoryItem.item_name}
            onDeleteClick={handleDeleteInventoryItem}
            onCancelClick={handleCancelDelete}
            itemID={inventoryItem.id}
          />
        )}
      </div>
    )
  );
}

export default InventoryItem;
