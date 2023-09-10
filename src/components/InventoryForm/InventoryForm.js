import "./InventoryForm.scss";

import InputAndLabel from "../../components/InputAndLabel/InputAndLabel";
import ButtonFooter from "../../components/ButtonFooter/ButtonFooter";
import RequiredError from "../../components/RequiredError/RequiredError";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const apiURL = `${process.env.REACT_APP_URL}:${process.env.REACT_APP_PORT}`;
const inventoryCategoriesURL = `${apiURL}/api/inventories/categories`;
const warehousesURL = `${apiURL}/api/warehouses`;

function InventoryForm({ handleSubmitFunction, item, submitButtonText, successMsg, errorMsg, redirectPath }) {
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

	const [isSuccessful, setIsSuccessful] = useState(false);
	const [isUnsuccessful, setIsUnsuccessful] = useState(false);

	const navigate = useNavigate();

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

	// Loads item information if there is an item
	useEffect(() => {
		if (item) {
			setItemName(item.item_name);
			setDescription(item.description);
			setCategory(item.category);
			setStatus(item.status);
			setQuantity(item.quantity);
			setWarehouseId(item.warehouse_id);
		}
	}, [item]);

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

	const handleSubmit = (event) => {
		event.preventDefault();

		if (isFormValid()) {
			// Construct a new inventory item object
			let inventoryItem = {
				warehouse_id: event.target.warehouseId.value,
				item_name: event.target.itemName.value,
				description: event.target.description.value,
				category: event.target.category.value,
				status: event.target.status.value,
				quantity: event.target.status.value === "In Stock" ? event.target.quantity.value : "0",
			};

			handleSubmitFunction(inventoryItem)
				.then((response) => {
					setIsSuccessful(true);
					setIsUnsuccessful(false);
					clearForm();
					setTimeout(() => {
						navigate(redirectPath);
					}, 5000);
				})
				.catch((error) => {
					setIsSuccessful(false);
					setIsUnsuccessful(true);
					console.log("There was an issue with the API Request.");
				});
		}
	};

	return (
		<form className="inventory-item-form" onSubmit={handleSubmit}>
			<div className="item-details">
				<h2 className="inventory-item-form__subHeading">Item Details</h2>
				{/* Item Name */}
				<InputAndLabel className={!isItemNameValid ? "inputError" : ""} label="Item Name" id="itemName" name="itemName" value={itemName} placeholder="Item Name" onChange={handleChangeItemName} />
				{!isItemNameValid && <RequiredError />}
				{/* Description */}
				<label className="textBoxLabel" htmlFor="description">
					Description
				</label>
				<textarea
					className={"inputTextBox inputTextArea" + (!isDescriptionValid ? " inputError" : "")}
					name="description"
					value={description}
					placeholder="Please enter a brief item description..."
					onChange={handleChangeDescription}
				/>
				{!isDescriptionValid && <RequiredError />}
				{/* Category */}
				<label className="textBoxLabel" htmlFor="category">
					Category
				</label>
				<select className={"inputTextBox" + (!isCategoryValid ? " inputError" : "")} name="category" value={category} onChange={handleChangeCategory}>
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
				<h2 className="inventory-item-form__subHeading">Item Availability</h2>
				{/* Status */}
				<label className="textBoxLabel">Status</label>
				<div className="radio-button-group">
					<div className="radio-button-group__radio">
						<input className={!isStatusValid ? "inputError" : ""} type="radio" id="status_inStock" name="status" value="In Stock" checked={status === "In Stock"} onChange={handleChangeStatus} />
						<label className="radio-button-group__radio__label" htmlFor="status_inStock">
							In stock
						</label>
					</div>
					<div className="radio-button-group__radio">
						<input
							className={!isStatusValid ? "inputError" : ""}
							type="radio"
							id="status_outOfStock"
							name="status"
							value="Out of Stock"
							checked={status === "Out of Stock"}
							onChange={handleChangeStatus}
						/>
						<label className="radio-button-group__radio__label" htmlFor="status_outOfStock">
							Out of stock
						</label>
					</div>
				</div>
				{!isStatusValid && <RequiredError />}
				{/* Quantity */}
				{status === "In Stock" && (
					<InputAndLabel className={" quantity" + (!isQuantityValid ? "inputError" : "")} label="Quantity" id="quantity" name="quantity" value={quantity} onChange={handleChangeQuantity} />
				)}
				{status === "In Stock" && !isQuantityValid && <RequiredError />}
				{/* Warehouse */}
				<label className="textBoxLabel" htmlFor="warehouseId">
					Warehouse
				</label>
				<select className={"inputTextBox" + (!istWarehouseIdValid ? " inputError" : "")} name="warehouseId" value={warehouseId} onChange={handleChangeWarehouse}>
					<option>Please select</option>
					{warehouseList.map((warehouse) => (
						<option key={warehouse.id} value={warehouse.id}>
							{warehouse.warehouse_name}
						</option>
					))}
				</select>
				{!istWarehouseIdValid && <RequiredError />}
			</div>
			{isSuccessful && <p className="success-msg">{successMsg}</p>}
			{isUnsuccessful && <p className="error-msg">{errorMsg}</p>}
			<ButtonFooter Cancel="Cancel" actionButton={submitButtonText} actionButtonType="submit" />
		</form>
	);
}

export default InventoryForm;
