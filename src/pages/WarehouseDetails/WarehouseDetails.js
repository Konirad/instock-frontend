import "./WarehouseDetails.scss";
import "../../styles/partials/_global.scss";
import MainHeader from "../../components/MainHeader/MainHeader";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InventoryList from "../../components/InventoryList/InventoryList";


function WarehouseDetails() {
  const { id } = useParams();
  const [currentWarehouse, setWarehouse] = useState([]);
  const [currentItems, setItems] = useState([]);
  const axiosGet = (id) => {
    axios
      .get(
        `${process.env.REACT_APP_URL}:${process.env.REACT_APP_PORT}/api/warehouses/${id}`
      )
      .then((response) => {
        setWarehouse(response.data[0]);
      });
  };
  useEffect(() => {
    axiosGet(id);
  }, [id]);

  const axiosGetItems = (id)=>{
    axios
    .get(
      `${process.env.REACT_APP_URL}:${process.env.REACT_APP_PORT}/api/warehouses/${id}/items`
    )
    .then((response) => {
      if(!response.data){
        
      }else{
        setItems(response.data);
      }
     
    })
    .catch((err)=>{
      console.error(err)
    });
  }

  useEffect(() => {
    axiosGetItems(id);
  }, [id]);


  return (
    <div className="mainContent__container">
      <MainHeader
        title={currentWarehouse.warehouse_name}
        backButton="true"
      />
      <hr className="divider"></hr>
      <div className="details__container">
        <div className="details__warehouseContainer">
          <p className="details__subHeader">WAREHOUSE ADDRESS:</p>
          <div className="details__addressContainer">
            <p className="details__subText">{currentWarehouse.address},</p>
            <p className="details__subText">
              {currentWarehouse.city}, {currentWarehouse.country}
            </p>
          </div>
        </div>
        <hr className="divider divider--vertical"></hr>
        <div className="details__nameAndInfoContainer">
          <div className="details__nameContainer">
            <p className="details__subHeader">CONTACT NAME:</p>
            <p className="details__subText">{currentWarehouse.contact_name}</p>
            <p className="details__subText">
              {currentWarehouse.contact_position}
            </p>
          </div>

          <div className="details__infoContainer">
            <p className="details__subHeader">CONTACT INFORMATION:</p>
            <p className="details__subText">{currentWarehouse.contact_phone}</p>
            <p className="details__subText">{currentWarehouse.contact_email}</p>
          </div>
        </div>
      </div>
      <div>
      <InventoryList inventoryList={currentItems} page="warehouse"/>
      </div>
    </div>
  );
}

export default WarehouseDetails;
