import "./WarehouseDetails.scss"
import "../../styles/partials/global.scss"
import backArrow from "../../assets/Icons/arrow_back-24px.svg"
import {Link} from "react-router-dom"

import axios from 'axios';


function WarehouseDetails(){

    const axiosGet = ()=>{
        axios.get()
    }
    return(
        <div className="mainContent__container">
        <div className="details__header">
            <Link to="/warehouses">
            <img src={backArrow}/>
            </Link>
            <h2>**Warehouse Name**</h2>
        </div>
        <hr className="divider"></hr>
        <div className="details__container">
        <div className="details__warehouseContainer">
            <p className="details__subHeader">WAREHOUSE ADDRESS:</p>
            <p className="details__subText">**Street Address**</p>
            <p className="details__subText">**City and Country**</p>
        </div>
        <hr className="divider divider--vertical"></hr>

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
    )
}

export default WarehouseDetails;