import "./InventoryList.scss";
import InventoryItem from "../InventoryItem/InventoryItem";

function InventoryList({ inventoryList }) {
    return (
        inventoryList && (
            <div className="inventory-list">
                {inventoryList.map((inventoryItem) => (
                    <InventoryItem key={"InventoryItem__" + inventoryItem.id} inventoryItem={inventoryItem} />
                ))}
            </div>
        )
    );
}

export default InventoryList;
