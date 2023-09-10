import "./InventoryList.scss";
import InventoryItem from "../InventoryItem/InventoryItem";
import TableHeader from "../TableHeader/TableHeader";

function InventoryList({ inventoryList, page }) {
  const handleDeleteInventoryItem = async (itemId) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_URL}:${process.env.REACT_APP_PORT}/api/inventories/${itemId}`,
        {
          method: "DELETE",
        }
      );

      if (response.status === 204) {
        updateInventoryList(itemId);
      } else {
        console.error("Failed to delete item.");
      }
    } catch (error) {
      console.error("error", error);
    }
  };

  const updateInventoryList = (deletedItemId) => {
    const updatedList = inventoryList.filter(
      (inventoryItem) => inventoryItem.id !== deletedItemId
    );
    setInventoryList(updatedList);
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
      {inventoryList && (
        <div className="inventory-list">
          {inventoryList.map((inventoryItem) => (
            <InventoryItem
              key={"InventoryItem__" + inventoryItem.id}
              inventoryItem={inventoryItem}
              page={page}
              onDeleteInventoryItem={() =>
                handleDeleteInventoryItem(inventoryItem.id)
              }
            />
          ))}
        </div>
      )}
    </>
  );
}

export default InventoryList;
