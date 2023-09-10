import "./InventoryItem.scss";
import TableLink from "../TableLink/TableLink";
import Tag from "../Tag/Tag";
import IconButton from "../IconButton/IconButton";
import DeleteModal from "../DeleteModal/DeleteModal";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function InventoryItem({ inventoryItem, page, refreshInventoryListFunction }) {
	const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);

	const navigate = useNavigate(); 

	const handleDeleteInventoryItem = (itemID) => {
		setIsDeleteModalVisible(true);
	};

	const handleEditInventoryItem = (id) => {
		navigate(`/inventory/${id}/edit`);
	};

	const handleCancelDelete = () => {
		setIsDeleteModalVisible(false);
	};

	const deleteModalProps = {
		itemName: inventoryItem.item_name,
		onDeleteClick: (itemID) => {
			handleDeleteInventoryItem(itemID);
			refreshInventoryListFunction();
		},
		onCancelClick: handleCancelDelete,
		itemID: inventoryItem.id,
	};

	return (
		inventoryItem && (
			<div className="inventory-item">
				<div className="info inventory-name-status-order column-extra-wide">
					<h4 className="info__label">Inventory Item</h4>
					<TableLink linkText={inventoryItem.item_name} linkPath={`/inventory/${inventoryItem.id}`} />
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
					<IconButton actionType="delete" actionFunction={handleDeleteInventoryItem} />
					<IconButton actionType="edit" actionFunction={()=> handleEditInventoryItem(inventoryItem.id)} />
				</div>
				{isDeleteModalVisible && (
					<DeleteModal
						itemName={inventoryItem.item_name}
						onDeleteClick={(itemID) => {
							deleteModalProps.onDeleteClick(itemID);
							handleDeleteInventoryItem(itemID);
						}}
						onCancelClick={handleCancelDelete}
						itemID={inventoryItem.id}
						refreshListFunction={refreshInventoryListFunction}
					/>
				)}
			</div>
		)
	);
}

export default InventoryItem;
