import "./EditInventoryItem.scss";

import MainHeader from "../../components/MainHeader/MainHeader";
import InventoryForm from "../../components/InventoryForm/InventoryForm";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const apiURL = `${process.env.REACT_APP_URL}:${process.env.REACT_APP_PORT}`;

function EditInventoryItem() {
	const { id } = useParams();
	const [item, setItem] = useState(null);
	const inventoryItemByIdURL = `${apiURL}/api/inventories/${id}`;

	// Load inventory item information by ID
	useEffect(() => {
		axios
			.get(inventoryItemByIdURL)
			.then((response) => {
				setItem(response.data);
			})
			.catch((error) => {
				console.log("There was an issue retriving data from the API.");
			});
	}, [id]);

	const handleEditInventoryItem = (inventoryItem) => {
		// Update inventory item
		return axios.put(inventoryItemByIdURL, JSON.stringify(inventoryItem), {
			headers: {
				"content-type": "application/json",
			},
		});
	};

	return (
		<section className="mainContent__container">
			<MainHeader title="Edit Inventory Item" backButton="true" />
			<InventoryForm
				handleSubmitFunction={handleEditInventoryItem}
				item={item}
				submitButtonText="Save"
				successMsg="Your item was updated successfully!"
				errorMsg="There was an issue updating your item!"
				redirectPath="/inventory"
			/>
		</section>
	);
}

export default EditInventoryItem;
