import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import MainHeader from '../../components/MainHeader/MainHeader';
import axios from 'axios';

function InventoryDetails() {
  const { id } = useParams();
  const [currentInventory, setCurrentInventory] = useState(null); // Initialize as null

  const axiosGet = (id) => {
    axios
      .get(
        `${process.env.REACT_APP_URL}:${process.env.REACT_APP_PORT}/api/inventories/${id}`
      )
      .then((response) => {
        setCurrentInventory(response.data[0]);
      });
  };

  useEffect(() => {
    axiosGet(id);
  }, [id]);

  if (!currentInventory) {
    return <div>Loading...</div>; 
  }

  return (
    <div>
      <div className="mainContent__container">
        <MainHeader
          title={currentInventory.item_name} 
          backButton="true"
        />
        <hr className="divider"></hr>
        <div className="details__container">
          <div className="details__warehouseContainer">
            <p className="details__subHeader">ITEM DESCRIPTION:</p>
            <p>{currentInventory.description}</p>
       
            <p className="details__subHeader">CATEGORY:</p>
              <p className="details__subText">{currentInventory.category}</p> 
              <p className="details__subHeader">STATUS:</p>
              <p className="details__subHeader">QUANTITY:</p>
                {currentInventory.status}, {currentInventory.quantity} 
             
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default InventoryDetails;
