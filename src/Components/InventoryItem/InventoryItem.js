import "./InventoryItem.scss";
import TableLink from "../TableLink/TableLink";

function InventoryItem({ inventoryItem }) {
    return (
        inventoryItem && (
            <div>
                <TableLink linkText={inventoryItem.item_name} />
                {inventoryItem.item_name}
            </div>
        )
    );
}

export default InventoryItem;
