import "./AddNewInventory.scss";

import MainHeader from "../../components/MainHeader/MainHeader";
import InputAndLabel from "../../components/InputAndLabel/InputAndLabel";
import ButtonFooter from "../../components/ButtonFooter/ButtonFooter";
import RequiredError from "../../components/RequiredError/RequiredError";

import { useState, useEffect } from "react";
import axios from "axios";

const apiURL = `${process.env.REACT_APP_URL}:${process.env.REACT_APP_PORT}`;
const inventoryCategoriesURL = `${apiURL}/api/inventories/categories`;
const warehousesURL = `${apiURL}/api/warehouses`;
const addInventoryItemURL = `${apiURL}/api/inventories/`;

function AddNewInventory() {
	const [itemName, setItemName] = useState(null);
	const [description, setDescription] = useState(null);
	const [category, setCategory] = useState(null);
	const [categoryList, setCategoryList] = useState([]);
	const [status, setStatus] = useState("In Stock");
	const [quantity, setQuantity] = useState(0);
	const [warehouseList, setWarehouseList] = useState([]);
	const [warehouseId, setWarehouseId] = useState(null);

	const [isItemNameValid, setIsItemNameValid] = useState(true);
	const [isDescriptionValid, setIsDescriptionValid] = useState(true);
	const [isCategoryValid, setIsCategoryValid] = useState(true);
	const [isStatusValid, setIsStatusValid] = useState(true);
	const [isQuantityValid, setIsQuantityValid] = useState(true);
	const [istWarehouseIdValid, setIstWarehouseIdValid] = useState(true);

	// Loads a set of categories from API
	useEffect(() => {
		axios
			.get(inventoryCategoriesURL)
			.then((response) => {
				setCategoryList(response.data);
			})
			.catch((error) => {
				console.log("There was an issue retriving data from the API.");
			});
	}, []);

	// Loads a list of warehouses from API
	useEffect(() => {
		axios
			.get(warehousesURL)
			.then((response) => {
				setWarehouseList(response.data);
			})
			.catch((error) => {
				console.log("There was an issue retriving data from the API.");
			});
	}, []);

	const handleChangeItemName = (e) => {
		setItemName(e.target.value);
	};

	const handleChangeDescription = (e) => {
		setDescription(e.target.value);
	};

	const handleChangeCategory = (e) => {
		setCategory(e.target.value);
	};

	const handleChangeStatus = (e) => {
		setStatus(e.target.value);
	};

	const handleChangeQuantity = (e) => {
		setQuantity(e.target.value);
	};

	const handleChangeWarehouse = (e) => {
		setWarehouseId(e.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		if (isFormValid()) {
			// Construct a new inventory item object
			let newInventoryItem = {
				warehouse_id: event.target.warehouseId.value,
				item_name: event.target.itemName.value,
				description: event.target.description.value,
				category: event.target.category.value,
				status: event.target.status.value,
				quantity: event.target.status.value === "In Stock" ? event.target.quantity.value : "0",
			};

			// Post new inventory item to API
			axios
				.post(addInventoryItemURL, JSON.stringify(newInventoryItem), {
					headers: {
						"content-type": "application/json",
					},
				})
				.then((response) => {
					clearForm();
					// setTimeout(() => {
					// 	navigate("/");
					// }, 5000);
				})
				.catch((error) => {
					console.log("There was an issue posting data to the API.");
				});
		}
	};

	const isFormValid = () => {
		let formIsValid = true;
		if (!itemName) {
			setIsItemNameValid(false);
			formIsValid = false;
		} else {
			setIsItemNameValid(true);
		}

		if (!description) {
			setIsDescriptionValid(false);
			formIsValid = false;
		} else {
			setIsDescriptionValid(true);
		}

		if (!category) {
			setIsCategoryValid(false);
			formIsValid = false;
		} else {
			setIsCategoryValid(true);
		}

		if (!status) {
			setIsStatusValid(false);
			formIsValid = false;
		} else {
			setIsStatusValid(true);
		}

		if (status === "In Stock" && !quantity) {
			setIsQuantityValid(false);
			formIsValid = false;
		} else {
			setIsQuantityValid(true);
		}

		if (!warehouseId) {
			setIstWarehouseIdValid(false);
			formIsValid = false;
		} else {
			setIstWarehouseIdValid(true);
		}

		return formIsValid;
	};

	const clearForm = () => {
		setItemName("");
		setDescription("");
		setCategory("");
		setStatus("In Stock");
		setQuantity(0);
		setWarehouseId("");
	};

	return (
		<section className="mainContent__container">
			<MainHeader title="Add New Inventory Item" backButton="true" />
			<form className="" onSubmit={handleSubmit}>
				<div className="item-details">
					<h2 className="add-inventory__subHeading">Item Details</h2>
					{/* Item Name */}
					<InputAndLabel label="Item Name" id="itemName" name="itemName" placeholder="Item Name" onChange={handleChangeItemName} />
					{!isItemNameValid && <RequiredError />}
					{/* Description */}
					<label className="textBoxLabel" htmlFor="description">
						Description
					</label>
					<textarea className="inputTextBox inputTextArea" name="description" placeholder="Please enter a brief item description..." onChange={handleChangeDescription} />
					{!isDescriptionValid && <RequiredError />}
					{/* Category */}
					<label className="textBoxLabel" htmlFor="category">
						Category
					</label>
					<select className="inputTextBox" name="category" onChange={handleChangeCategory}>
						<option>Please select</option>
						{categoryList.map((category) => (
							<option key={category.category} value={category.category}>
								{category.category}
							</option>
						))}
					</select>
					{!isCategoryValid && <RequiredError />}
				</div>
				<div className="item-availability">
					<h2 className="add-inventory__subHeading">Item Availability</h2>
					{/* Status */}
					<label className="textBoxLabel">Status</label>
					<div className="radio-button-group">
						<div className="radio-button-group__radio">
							<input type="radio" id="status_inStock" name="status" value="In Stock" checked={status === "In Stock"} onChange={handleChangeStatus} />
							<label className="radio-button-group__radio__label" htmlFor="status_inStock">
								In stock
							</label>
						</div>
						<div className="radio-button-group__radio">
							<input type="radio" id="status_outOfStock" name="status" value="Out of Stock" checked={status === "Out of Stock"} onChange={handleChangeStatus} />
							<label className="radio-button-group__radio__label" htmlFor="status_outOfStock">
								Out of stock
							</label>
						</div>
					</div>
					{!isStatusValid && <RequiredError />}
					{/* Quantity */}
					{status === "In Stock" && <InputAndLabel label="Quantity" id="quantity" name="quantity" onChange={handleChangeQuantity} />}
					{!isQuantityValid && <RequiredError />}
					{/* Warehouse */}
					<label className="textBoxLabel" htmlFor="warehouseId">
						Warehouse
					</label>
					<select className="inputTextBox" name="warehouseId" onChange={handleChangeWarehouse}>
						<option>Please select</option>
						{warehouseList.map((warehouse) => (
							<option key={warehouse.id} value={warehouse.id}>
								{warehouse.warehouse_name}
							</option>
						))}
					</select>
					{!istWarehouseIdValid && <RequiredError />}
				</div>
				<ButtonFooter Cancel="Cancel" actionButton="+ Add Item" actionButtonType="submit" />
			</form>
		</section>
	);
}

export default AddNewInventory;
