import "../../components/InventoryList/InventoryList.scss";
import InventoryItem from "../InventoryItem/InventoryItem";
import TableHeader from "../TableHeader/TableHeader";
import WarehouseItem from "../WarehouseItem/WarehouseItem";

function WarehouseList({ warehouseList }) {
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
                <div className="action-label column-normal">
                    <TableHeader label="Action" sortable="false" />
                </div>
            </div>
            {warehouseList && (
                <div className="inventory-list">
                    {warehouseList.map((inventoryItem) => (
                        <WarehouseItem
                            key={"InventoryItem__" + inventoryItem.id}
                            inventoryItem={inventoryItem}
                        />
                    ))}
                </div>
            )}
        </>
    );
}

export default WarehouseList;
