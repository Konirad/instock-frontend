import "./InventoryList.scss";
import InventoryItem from "../InventoryItem/InventoryItem";
import TableHeader from "../TableHeader/TableHeader";

function InventoryList({ inventoryList, page }) {
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
                {page=="warehouse" ? (
<></>
                ):                                       <div className="column-wide">
                <TableHeader label="Warehouse" sortable="true" />
            </div>}
        
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
                        />
                    ))}
                </div>
            )}
        </>
    );
}

export default InventoryList;
