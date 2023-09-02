import "./InventoryItem.scss";
import TableLink from "../TableLink/TableLink";
import Tag from "../Tag/Tag";
import IconButton from "../IconButton/IconButton";

function InventoryItem({ inventoryItem }) {

    const handleDeleteInventoryItem = () => {
        // code for deleting item
    }

    const handleEditInventoryItem = () => {
        // code for editing item
    }

    return (
        inventoryItem && (
            <div className="inventory-item">
                <div className="info inventory-name-status-order">
                    <h4 className="info__label">Inventory Item</h4>
                    <TableLink linkText={inventoryItem.item_name} linkPath={`inventory/${inventoryItem.id}`} />
                </div>
                <div className="info">
                    <h4 className="info__label">Category</h4>
                    <p className="info__detail">{inventoryItem.category}</p>
                </div>
                <div className="info inventory-name-status-order">
                    <h4 className="info__label">Status</h4>
                    <Tag statusText={inventoryItem.status} />
                </div>
                <div className="info">
                    <h4 className="info__label">QTY</h4>
                    <p className="info__detail">{inventoryItem.quantity}</p>
                </div>
                <div className="info warehouse-name-alignment">
                    <h4 className="info__label">Warehouse</h4>
                    <p className="info__detail">{inventoryItem.warehouse_name}</p>
                </div>
                <div className="action-buttons">
                    <IconButton actionType="delete" actionFunction={handleDeleteInventoryItem} />
                    <IconButton actionType="edit" actionFunction={handleEditInventoryItem} />
                </div>
            </div>
        )
    );
}

export default InventoryItem;
