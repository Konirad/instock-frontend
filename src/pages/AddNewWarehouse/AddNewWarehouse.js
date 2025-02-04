import MainHeader from "../../components/MainHeader/MainHeader";
import "./AddNewWarehouse.scss";
import { useState } from "react";
import "../../components/Button/Button.scss" 
import axios from 'axios'
import errorImage from "../../assets/Icons/error-24px.svg"
import InputAndLabel from "../../components/InputAndLabel/InputAndLabel";
import ButtonFooter from "../../components/ButtonFooter/ButtonFooter";
import { useNavigate } from "react-router-dom";



function AddNewWarehouse() {
  const [warehouseName, setWarehouseName] = useState();
  const [streetAddress, setStreetAddress] = useState();
  const [city, setCity] = useState();
  const [country, setCountry] = useState();

  const [contactName, setContactName] = useState();
  const [position, setPosition] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [email, setEmail] = useState();

  const navigate = useNavigate();

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
      warehouse_name: warehouseName,
      address: streetAddress,
      city: city,
      country: country,
      contact_name: contactName,
      contact_position: position,
      contact_phone: phoneNumber,
      contact_email: email,
    }

    // Display error for missing data
    if(!event.target[0].value){
     document.getElementById("warehouseName").classList.add("inputError")
     document.querySelector(".warehouseName__underContainer").style.display = 'flex'
    }else{
      document.getElementById("warehouseName").classList.remove("inputError")
      document.querySelector(".warehouseName__underContainer").style.display = 'none'
    }

    if(!event.target[1].value){
      document.getElementById("streetAddress").classList.add("inputError")
      document.querySelector(".address__underContainer").style.display = 'flex'
    }else{
      document.getElementById("streetAddress").classList.remove("inputError")
      document.querySelector(".address__underContainer").style.display = 'none'
    }

    if(!event.target[2].value){
      document.getElementById("city").classList.add("inputError")
      document.querySelector(".city__underContainer").style.display = 'flex'
    }else{
      document.getElementById("city").classList.remove("inputError")
      document.querySelector(".city__underContainer").style.display = 'none'
    }

    if(!event.target[3].value){
      document.getElementById("country").classList.add("inputError")
      document.querySelector(".country__underContainer").style.display = 'flex'
    }else{
      document.getElementById("country").classList.remove("inputError")
      document.querySelector(".country__underContainer").style.display = 'none'
    }

    if(!event.target[4].value){
      document.getElementById("contactName").classList.add("inputError")
      document.querySelector(".contactName__underContainer").style.display = 'flex'
    }else{
      document.getElementById("contactName").classList.remove("inputError")
      document.querySelector(".contactName__underContainer").style.display = 'none'
    }

    if(!event.target[5].value){
      document.getElementById("position").classList.add("inputError")
      document.querySelector(".position__underContainer").style.display = 'flex'
    }else{
      document.getElementById("position").classList.remove("inputError")
      document.querySelector(".position__underContainer").style.display = 'none'
    }

    if(!event.target[6].value){
      document.getElementById("phoneNumber").classList.add("inputError")
      document.querySelector(".phoneNumber__underContainer").style.display = 'flex'
    }else{
      document.getElementById("phoneNumber").classList.remove("inputError")
      document.querySelector(".phoneNumber__underContainer").style.display = 'none'
    }

    if(!event.target[7].value){
      document.getElementById("email").classList.add("inputError")
      document.querySelector(".email__underContainer").style.display = 'flex'
    }else{
      document.getElementById("email").classList.remove("inputError")
      document.querySelector(".email__underContainer").style.display = 'none'
    }


   try{
      await axios.post(`${process.env.REACT_APP_URL}:${process.env.REACT_APP_PORT}/api/warehouses/new`, addWarehouseObject).then((data)=>{
        console.log(data)
        navigate('/warehouses');
      })
   } catch(err){
     console.error(err)
   }
  }

  

  return (
    <form onSubmit={handleSubmit}>
    <div className="mainContent__container">
      <MainHeader title="Add New Warehouse" backButton="true" />
      <hr></hr>
      <div className="addNew__container">
        <div className="addNew__detailsContainer">
          <div className="addNew__warehouseDetails">
            <p className="addNew__warehouseDetails--header">Warehouse Details</p>
           <InputAndLabel label="Warehouse Name" placeholder="Warehouse Name" onClick={handleClearWarehouse} onChange={handleWarehouseText} id="warehouseName"/>
            <div className="warehouseName__underContainer"><img className="imageTextBox__underContainer--image" src={errorImage} alt="Input error" /> <p className="inputTextBox--error">This field is required.</p></div>

            <InputAndLabel label="Street Address" placeholder="Street Address" onClick={handleClearAddress} onChange={handleStreetAddress} id="streetAddress"/>
            <div className="address__underContainer"><img className="imageTextBox__underContainer--image" src={errorImage} alt="Input error"/> <p className="inputTextBox--error">This field is required.</p></div>
            
            <InputAndLabel label="City" placeholder="City" onClick={handleClearCity} onChange={handleCityText} id="city"/>
            <div className="city__underContainer"><img className="imageTextBox__underContainer--image" src={errorImage} alt="Input error"/> <p className="inputTextBox--error">This field is required.</p></div>
            
            <InputAndLabel label="Country" placeholder="Country" onClick={handleClearCountry} onChange={handleCountryText} id="country"/>
            <div className="country__underContainer"><img className="imageTextBox__underContainer--image" src={errorImage} alt="Input error"/> <p className="inputTextBox--error">This field is required.</p></div>
          </div>
          <hr></hr>

          <div className="addNew__contactDetails">
            <p className="addNew__contactDetails--header">Contact Details</p>
            <InputAndLabel label="Contact Name" placeholder="Contact Name" onClick={handleClearContact} onChange={handleContactName} id="contactName"/>
            <div className="contactName__underContainer"><img className="imageTextBox__underContainer--image" src={errorImage} alt="Input error"/> <p className="inputTextBox--error">This field is required.</p></div>
            <InputAndLabel label="Position" placeholder="Position" onClick={handleClearPosition} onChange={handlePosition} id="position"/>
            <div className="position__underContainer"><img className="imageTextBox__underContainer--image" src={errorImage} alt="Input error"/> <p className="inputTextBox--error">This field is required.</p></div>
            
            <InputAndLabel label="Phone Number" placeholder="Phone Number" onClick={handleClearPhoneNumber} onChange={handlePhoneNumber} id="phoneNumber"/>
            <div className="phoneNumber__underContainer"><img className="imageTextBox__underContainer--image" src={errorImage} alt="Input error"/> <p className="inputTextBox--error">This field is required.</p></div>
            
            <InputAndLabel label="Email" placeholder="Email" onClick={handleClearEmail} onChange={handleEmail} id="email"/>
            <div className="email__underContainer"><img className="imageTextBox__underContainer--image" src={errorImage} alt="Input error" /> <p className="inputTextBox--error">This field is required.</p></div>
          </div>
        </div>

        </div>
        <ButtonFooter Cancel="Cancel" actionButton="+ Add Warehouse" actionButtonType="submit"/>
    </div>
    </form>
  );
}

export default AddNewWarehouse;
