import MainHeader from "../MainHeader/MainHeader";
import "./EditWarehouse.scss";
import { useEffect, useState } from "react";
import "../Button/Button.scss";
import axios from "axios";
import errorImage from "../../assets/Icons/error-24px.svg";
import InputAndLabel from "../InputAndLabel/InputAndLabel";
import ButtonFooter from "../ButtonFooter/ButtonFooter";
import { useParams } from "react-router-dom";

function EditWarehouse() {
  const { id } = useParams();

  const [warehouseData, setWarehouseData] = useState({});

  useEffect(() => {
    const apiUrl = `http://localhost:8080/api/warehouses/bfc9bea7-66f1-44e9-879b-4d363a888eb4`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setWarehouseData({
          warehouse_name: data.warehouse_name,
          address: data.address,
          city: data.city,
          country: data.country,
          contact_name: data.contact_name,
          contact_position: data.contact_position,
          contact_phone: data.contact_phone,
          contact_email: data.contact_email,
        });
      })
      .catch((error) => {
        console.error("Error fetching warehouse data:", error);
      });
  }, [id]);

  const [warehouseName, setWarehouseName] = useState(
    warehouseData.warehouse_name
  );
  const [streetAddress, setStreetAddress] = useState(warehouseData.address);
  const [city, setCity] = useState(warehouseData.city);
  const [country, setCountry] = useState(warehouseData.country);
  const [contactName, setContactName] = useState(warehouseData.contact_name);
  const [position, setPosition] = useState(warehouseData.contact_position);
  const [phoneNumber, setPhoneNumber] = useState(warehouseData.contact_phone);
  const [email, setEmail] = useState(warehouseData.contact_email);

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

  async function handleSubmit(event) {
    event.preventDefault();
    const addWarehouseObject = {
      warehouse_name: warehouseName,
      address: streetAddress,
      city: city,
      country: country,
      contact_name: contactName,
      contact_position: position,
      contact_phone: phoneNumber,
      contact_email: email,
    };

    // Display error for missing data
    if (!event.target[0].value) {
      document.getElementById("warehouseName").classList.add("inputError");
      document.querySelector(".warehouseName__underContainer").style.display =
        "flex";
    } else {
      document.getElementById("warehouseName").classList.remove("inputError");
      document.querySelector(".warehouseName__underContainer").style.display =
        "none";
    }

    if (!event.target[1].value) {
      document.getElementById("streetAddress").classList.add("inputError");
      document.querySelector(".address__underContainer").style.display = "flex";
    } else {
      document.getElementById("streetAddress").classList.remove("inputError");
      document.querySelector(".address__underContainer").style.display = "none";
    }

    if (!event.target[2].value) {
      document.getElementById("city").classList.add("inputError");
      document.querySelector(".city__underContainer").style.display = "flex";
    } else {
      document.getElementById("city").classList.remove("inputError");
      document.querySelector(".city__underContainer").style.display = "none";
    }

    if (!event.target[3].value) {
      document.getElementById("country").classList.add("inputError");
      document.querySelector(".country__underContainer").style.display = "flex";
    } else {
      document.getElementById("country").classList.remove("inputError");
      document.querySelector(".country__underContainer").style.display = "none";
    }

    if (!event.target[4].value) {
      document.getElementById("contactName").classList.add("inputError");
      document.querySelector(".contactName__underContainer").style.display =
        "flex";
    } else {
      document.getElementById("contactName").classList.remove("inputError");
      document.querySelector(".contactName__underContainer").style.display =
        "none";
    }

    if (!event.target[5].value) {
      document.getElementById("position").classList.add("inputError");
      document.querySelector(".position__underContainer").style.display =
        "flex";
    } else {
      document.getElementById("position").classList.remove("inputError");
      document.querySelector(".position__underContainer").style.display =
        "none";
    }

    if (!event.target[6].value) {
      document.getElementById("phoneNumber").classList.add("inputError");
      document.querySelector(".phoneNumber__underContainer").style.display =
        "flex";
    } else {
      document.getElementById("phoneNumber").classList.remove("inputError");
      document.querySelector(".phoneNumber__underContainer").style.display =
        "none";
    }

    if (!event.target[7].value) {
      document.getElementById("email").classList.add("inputError");
      document.querySelector(".email__underContainer").style.display = "flex";
    } else {
      document.getElementById("email").classList.remove("inputError");
      document.querySelector(".email__underContainer").style.display = "none";
    }

    try {
      await axios
        .post(
          `${process.env.REACT_APP_URL}:${process.env.REACT_APP_PORT}/api/warehouses/new`,
          addWarehouseObject
        )
        .then((data) => {
          console.log(data);
        });
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mainContent__container">
        <MainHeader title="Edit Warehouse" backButton="displayYes" />
        <hr></hr>
        <div className="edit__container">
          <div className="edit__detailsContainer">
            <div className="edit__warehouseDetails">
              <p className="edit__warehouseDetails--header">
                Warehouse Details
              </p>
              <InputAndLabel
                label="Warehouse Name"
                placeholder="Warehouse Name"
                onClick={handleClearWarehouse}
                onChange={handleWarehouseText}
                id="warehouseName"
                value={warehouseData.warehouse_name}
              />
              <div className="warehouseName__underContainer">
                <img
                  className="imageTextBox__underContainer--image"
                  src={errorImage}
                  alt="Input error"
                />{" "}
                <p className="inputTextBox--error">This field is required.</p>
              </div>

              <InputAndLabel
                label="Street Address"
                placeholder="Street Address"
                onClick={handleClearAddress}
                onChange={handleStreetAddress}
                id="streetAddress"
                value={warehouseData.address}
              />
              <div className="address__underContainer">
                <img
                  className="imageTextBox__underContainer--image"
                  src={errorImage}
                  alt="Input error"
                />{" "}
                <p className="inputTextBox--error">This field is required.</p>
              </div>

              <InputAndLabel
                label="City"
                placeholder="City"
                onClick={handleClearCity}
                onChange={handleCityText}
                id="city"
                value={warehouseData.city}
              />
              <div className="city__underContainer">
                <img
                  className="imageTextBox__underContainer--image"
                  src={errorImage}
                  alt="Input error"
                />{" "}
                <p className="inputTextBox--error">This field is required.</p>
              </div>

              <InputAndLabel
                label="Country"
                placeholder="Country"
                onClick={handleClearCountry}
                onChange={handleCountryText}
                id="country"
                value={warehouseData.country}
              />
              <div className="country__underContainer">
                <img
                  className="imageTextBox__underContainer--image"
                  src={errorImage}
                  alt="Input error"
                />{" "}
                <p className="inputTextBox--error">This field is required.</p>
              </div>
            </div>
            <hr className="divider"></hr>

            <div className="edit__contactDetails">
              <p className="edit__contactDetails--header">Contact Details</p>
              <InputAndLabel
                label="Contact Name"
                placeholder="Contact Name"
                onClick={handleClearContact}
                onChange={handleContactName}
                id="contactName"
                value={warehouseData.contact_name}
              />
              <div className="contactName__underContainer">
                <img
                  className="imageTextBox__underContainer--image"
                  src={errorImage}
                  alt="Input error"
                />{" "}
                <p className="inputTextBox--error">This field is required.</p>
              </div>
              <InputAndLabel
                label="Position"
                placeholder="Position"
                onClick={handleClearPosition}
                onChange={handlePosition}
                id="position"
                value={warehouseData.contact_position}
              />
              <div className="position__underContainer">
                <img
                  className="imageTextBox__underContainer--image"
                  src={errorImage}
                  alt="Input error"
                />{" "}
                <p className="inputTextBox--error">This field is required.</p>
              </div>

              <InputAndLabel
                label="Phone Number"
                placeholder="Phone Number"
                onClick={handleClearPhoneNumber}
                onChange={handlePhoneNumber}
                id="phoneNumber"
                value={warehouseData.contact_phone}
              />
              <div className="phoneNumber__underContainer">
                <img
                  className="imageTextBox__underContainer--image"
                  src={errorImage}
                  alt="Input error"
                />{" "}
                <p className="inputTextBox--error">This field is required.</p>
              </div>

              <InputAndLabel
                label="Email"
                placeholder="Email"
                onClick={handleClearEmail}
                onChange={handleEmail}
                id="email"
                value={warehouseData.contact_email}
              />
              <div className="email__underContainer">
                <img
                  className="imageTextBox__underContainer--image"
                  src={errorImage}
                  alt="Input error"
                />{" "}
                <p className="inputTextBox--error">This field is required.</p>
              </div>
            </div>
          </div>
        </div>
        <ButtonFooter
          Cancel="Cancel"
          actionButton="save"
          actionButtonType="submit"
        />
      </div>
    </form>
  );
}

export default EditWarehouse;
