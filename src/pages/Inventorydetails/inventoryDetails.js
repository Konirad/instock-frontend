import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import MainHeader from '../../components/MainHeader/MainHeader';
import axios from 'axios';
import Tag from '../../components/Tag/Tag';
import './inventoryDetails.scss';
import IconButton from '../../components/IconButton/IconButton';
import { Link } from 'react-router-dom';


function InventoryDetails() {
  const { id } = useParams();
  const [currentInventory, setCurrentInventory] = useState(null);

  const axiosGet = (id) => {
    axios
      .get(
        `${process.env.REACT_APP_URL}:${process.env.REACT_APP_PORT}/api/inventories/${id}`
      )
      .then((response) => {
        setCurrentInventory(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
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
      title={
      <div className="mainContent__container__header">
      <div className="header-title">
        {currentInventory.item_name}
      </div>
      <Link to="/editinventory">
        <IconButton
          actionType="edit"
          actionFunction={() => {
            
          }}
        />
      </Link>
    </div>
  }
  backButton="true"
/>
        <hr className="divider"></hr>
        <div className="details__container">
          <div className="details__InventoryContainer">
            <div className='details__InventoryContainer__left'>
            <p className="details__subHeader">ITEM DESCRIPTION:</p>
            <p className="details__subText">{currentInventory.description}</p>
            <p className="details__subHeader">CATEGORY:</p>
            <p className="details__subText">{currentInventory.category}</p> 
            </div>
            <hr className="divider__vertical"></hr>
            <div className='details__InventoryContainer__right'>
            <div className='details__combineddetails'>
              <div className="details__status">
                <p className="details__subHeader">STATUS:</p>
                <Tag statusText={currentInventory.status} />
              </div>
              <div className="details__quantity">
                <p className="details__subHeader">QUANTITY:</p>
                <p className="details__subText">
                  {currentInventory.quantity}
                </p>
                
              </div>
              
            </div>

             
            <p className="details__subHeader">WAREHOUSE:</p>
            <p className="details__subText">{currentInventory.warehouse_name}</p> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InventoryDetails;
