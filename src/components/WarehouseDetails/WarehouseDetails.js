import "./WarehouseDetails.scss";
import "../../styles/partials/_global.scss";
import backArrow from "../../assets/Icons/arrow_back-24px.svg";
import { Link } from "react-router-dom";
import MainHeader from "../MainHeader/MainHeader";


import axios from "axios";

function WarehouseDetails() {

  const axiosGet = () => {
    axios.get();
  };
  return (
    <div className="mainContent__container">
      <MainHeader text="**Warehouse Name**" backButton="displayYes" />
      <hr className="divider"></hr>
      <div className="details__container">
        <div className="details__warehouseContainer">
          <p className="details__subHeader">WAREHOUSE ADDRESS:</p>
          <div className="details__addressContainer">
            <p className="details__subText">**Street Address**</p>
            <p className="details__subText">**City and Country**</p>
          </div>
        </div>
        <hr className="divider divider--vertical"></hr>
        <div className="details__nameAndInfoContainer">
          <div className="details__nameContainer">
            <p className="details__subHeader">CONTACT NAME:</p>
            <p className="details__subText">**First and Last Name**</p>
            <p className="details__subText">**Position**</p>
          </div>

          <div className="details__infoContainer">
            <p className="details__subHeader">CONTACT INFORMATION:</p>
            <p className="details__subText">**+2(123)-456-789**</p>
            <p className="details__subText">**Email@Instock.com**</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WarehouseDetails;
