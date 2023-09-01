import React, { useEffect } from "react";
import MainHeader from "../MainHeader/MainHeader";
import "./AddNewWarehouse.scss";
import { useState } from "react";
import Button from "../Button/Button"

function AddNewWarehouse() {
  const [warehouseName, setWarehouseName] = useState("Warehouse Name");
  const [streetAddress, setStreetAddress] = useState("Street Address");
  const [city, setCity] = useState("City");
  const [country, setCountry] = useState("Country");

  const [contactName, setContactName] = useState("Contact Name");
  const [position, setPosition] = useState("Position");
  const [phoneNumber, setPhoneNumber] = useState("Phone Number");
  const [email, setEmail] = useState("Email");

  //Event Handler
  const handleWarehouseText = (event) => {
    setWarehouseName(event.target.value);
  };
  const handleStreetAddress = (event) => {
    setStreetAddress(event.target.value);
  };
  const handleCityText = (event) => {
    setCity(event.target.value);
  };
  const handleCountryText = (event) => {
    setCountry(event.target.value);
  };
  const handlePosition = (event) => {
    setPosition(event.target.value);
  };
  const handlePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleContactName = (event) => {
    setContactName(event.target.value);
  };

  //Clear Fields
  const handleClearAddress = () => {
    setStreetAddress("");
  };
  const handleClearWarehouse = () => {
    setWarehouseName("");
  };
  const handleClearCity = () => {
    setCity("");
  };
  const handleClearCountry = () => {
    setCountry("");
  };
  const handleClearContact = () => {
    setContactName("");
  };
  const handleClearPosition = () => {
    setPosition("");
  };
  const handleClearPhoneNumber = () => {
    setPhoneNumber("");
  };
  const handleClearEmail = () => {
    setEmail("");
  };

  async function handleSubmit(event){
    event.preventDefault()
    const addWarehouseObject ={
      warehouseName: warehouseName,
      streetAddress: streetAddress,
      city: city,
      country: country,
    }
    console.log("The Warehouse Object is "+JSON.stringify(addWarehouseObject))

  //  try{
      // await async.post("http://localhost:8080/", addWarehouseObject)
  //  } catch(err){
   //   console.error(err)
//    }
  }


  return (
    <form onSubmit={handleSubmit}>
    <div className="mainContent__container">
      <MainHeader text="Add New Warehouse" backButton="displayYes" />
      <hr></hr>
      <div className="addNew__container">
        <div className="addNew__detailsContainer">
          <div className="addNew__warehouseDetails">
            <p className="addNew__warehouseDetails--header">Warehouse Details</p>
            <label className="textBoxLabel" htmlFor="warehouseName">
              Warehouse Name
            </label>
            <input
              type="text"
              className="inputTextBox"
              id="warehouseName"
              value={warehouseName}
              onClick={handleClearWarehouse}
              onChange={handleWarehouseText}
            />
            <label className="textBoxLabel" htmlFor="streetAddress">
              Street Address
            </label>
            <input
              type="text"
              id="streetAddress"
              className="inputTextBox"
              value={streetAddress}
              onClick={handleClearAddress}
              onChange={handleStreetAddress}
            />
            <label className="textBoxLabel" htmlFor="city">
              City
            </label>
            <input
              type="text"
              id="city"
              className="inputTextBox"
              value={city}
              onClick={handleClearCity}
              onChange={handleCityText}
            />
            <label className="textBoxLabel" htmlFor="country">
              Country
            </label>
            <input
              type="text"
              id="country"
              className="inputTextBox"
              value={country}
              onClick={handleClearCountry}
              onChange={handleCountryText}
            />
          </div>
          <hr></hr>

          <div className="addNew__contactDetails">
            <p className="addNew__contactDetails--header">Contact Details</p>
            <label className="textBoxLabel" htmlFor="contactName">
              Contact Name
            </label>
            <input
              type="text"
              className="inputTextBox"
              id="contactName"
              value={contactName}
              onClick={handleClearContact}
              onChange={handleContactName}
            />
            <label className="textBoxLabel" htmlFor="position">
              Position
            </label>
            <input
              type="text"
              className="inputTextBox"
              id="position"
              value={position}
              onClick={handleClearPosition}
              onChange={handlePosition}
            />
            <label className="textBoxLabel" htmlFor="phoneNumber">
              Phone Number
            </label>
            <input
              type="text"
              className="inputTextBox"
              id="phoneNumber"
              value={phoneNumber}
              onClick={handleClearPhoneNumber}
              onChange={handlePhoneNumber}
            />
            <label className="textBoxLabel" htmlFor="email">
              Email
            </label>
            <input
              type="text"
              className="inputTextBox"
              id="email"
              value={email}
              onClick={handleClearEmail}
              onChange={handleEmail}
            />
          </div>
        </div>

        </div>
        <div className="addNew__footer">
        <Button text="Cancel" style="button secondary cancel" />
        <button type="submit"><Button className="addNew__button--add" text="+ Add Warehouse" style="button primary"/> </button>
      </div>
    </div>
    </form>
  );
}

export default AddNewWarehouse;
