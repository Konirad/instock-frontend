import MainHeader from "../../components/MainHeader/MainHeader";
import InventoryForm from "../../components/InventoryForm/InventoryForm";

import axios from "axios";

const apiURL = `${process.env.REACT_APP_URL}:${process.env.REACT_APP_PORT}`;
const addInventoryItemURL = `${apiURL}/api/inventories/`;

function AddNewInventory() {
	const handleAddInventoryItem = (newInventoryItem) => {
		// Post new inventory item to API
		return axios.post(addInventoryItemURL, JSON.stringify(newInventoryItem), {
			headers: {
				"content-type": "application/json", 
			},
		});
	};

	return (
		<section className="mainContent__container">
			<MainHeader title="Add New Inventory Item" backButton="true" />
			<hr className="divider"></hr>
			<InventoryForm
				handleSubmitFunction={handleAddInventoryItem}
				submitButtonText="+ Add Item"
				successMsg="Your item was successfully added!"
				errorMsg="There was an issue adding your item!"
				redirectPath="/inventory"
			/>
		</section>
	);
}

export default AddNewInventory;
