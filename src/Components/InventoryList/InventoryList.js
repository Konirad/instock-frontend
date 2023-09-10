import React, { useState } from "react";
import "./InventoryList.scss";
import InventoryItem from "../InventoryItem/InventoryItem";
import TableHeader from "../TableHeader/TableHeader";

function InventoryList({ inventoryList, page }) {
  const [updatedInventoryList, setUpdatedInventoryList] =
    useState(inventoryList);

  const handleDeleteInventoryItem = async (itemID) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_URL}:${process.env.REACT_APP_PORT}/api/inventories/${itemID}`,
        {
          method: "DELETE",
        }
      );

      if (response.status === 204) {
        const updatedList = updatedInventoryList.filter(
          (item) => item.id !== itemID
        );
        setUpdatedInventoryList(updatedList);
      } else if (response.status === 404) {
        console.log("Item not found.");
      } else {
        console.error("Failed to delete item.");
      }
    } catch (error) {
      console.error("error", error);
    }
  };

  return (
    <>
      <div className="table-header-row">
        <div className="column-extra-wide">
          <TableHeader label="Inventory Item" sortable="true" />
        </div>
        <div className="column-extra-wide">
          <TableHeader label="Category" sortable="true" />
        </div>
        <div className="column-wide">
          <TableHeader label="Status" sortable="true" />
        </div>
        <div className="column-normal">
          <TableHeader label="QTY" sortable="true" />
        </div>
        {page == "warehouse" ? (
          <></>
        ) : (
          <div className="column-wide">
            <TableHeader label="Warehouse" sortable="true" />
          </div>
        )}

        <div className="action-label column-normal">
          <TableHeader label="Action" sortable="false" />
        </div>
      </div>
      {updatedInventoryList && (
        <div className="inventory-list">
          {updatedInventoryList.map((inventoryItem) => (
            <InventoryItem
              key={"InventoryItem__" + inventoryItem.id}
              inventoryItem={inventoryItem}
              page={page}
              onDeleteInventoryItem={() =>
                handleDeleteInventoryItem(inventoryItem.id)
              }
              setUpdatedInventoryList={setUpdatedInventoryList}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default InventoryList;
