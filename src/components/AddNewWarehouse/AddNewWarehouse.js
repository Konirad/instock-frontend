import React, { useEffect } from "react";
import MainHeader from "../MainHeader/MainHeader";
import "./AddNewWarehouse.scss";
import { useState } from "react";

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

  return (
    <div className="mainContent__container">
      <MainHeader text="Add New Warehouse" backButton="displayYes" />
      <hr></hr>
      <div className="addNew__container">
        <div className="addNew__detailsContainer">
          <div className="addNew__details">
            <p className="addNew__headerDetails">Warehouse Details</p>
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

          <div className="addNew__contact">
            <p>Contact Details</p>
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
    </div>
  );
}

export default AddNewWarehouse;
