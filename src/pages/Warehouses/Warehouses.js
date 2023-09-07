import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Warehouses.scss";
import MainHeader from "../../components/MainHeader/MainHeader";
import HeaderRow from "../../components/HeaderRowTitle/HeaderRow";
import IconButton from "../../components/IconButton/IconButton";
import DeleteWarehouse from "../../components/DeleteWarehouse/DeleteWarehouse";
import chevron from '../../assets/Icons/chevron_right-24px.svg';



function Warehouses() {
  const [warehouses, setWarehouses] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [warehouseToDelete, setWarehouseToDelete] = useState(null);

  useEffect(() => {
    // Fetch your warehouse data
    axios
      .get(`${process.env.REACT_APP_URL}:${process.env.REACT_APP_PORT}/api/warehouses`)
      .then((response) => {
        const data = response.data;
        setWarehouses(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleDeleteWarehouseItem = (warehouseId) => {
    setWarehouseToDelete(warehouseId);
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = () => {
    axios
      .delete(`/api/warehouses/${warehouseToDelete}`)
      .then((response) => {
      
        setShowDeleteModal(false);
      })
      .catch((error) => {
       
        console.error("Error deleting warehouse:", error);

        
        setShowDeleteModal(false);
      });
  };

  const handleCancelDelete = () => {
  
    setShowDeleteModal(false);
  };

  const headerData = [
    { label: "WAREHOUSE", sortable: true },
    { label: "ADDRESS", sortable: true },
    { label: "CONTACT NAME", sortable: true },
    { label: "CONTACT INFORMATION", sortable: true },
  ];

  const handleEditInventoryItem = () => {
    // code for editing item
  };

  return (
    <div className="mainContent__container">
      <MainHeader
        title="Warehouses"
        backButton={false} 
        searchAndAdd={true} 
        addButtonText="Add New Warehouse"
        addButtonPath="/warehouses/new"
      />
      <div className="warehouseList">
        <HeaderRow headers={headerData} />

        {warehouses.map((warehouse) => (
          <div className="warehouse" key={warehouse.id}>
            <div className="warehouse__rows">
              <div className="warehouse__rows-left">
                <p className="header__rowtitle-mobile">WAREHOUSE</p>
                <div className="warehouse__rows__name">
                  <Link to={`/warehouses/${warehouse.id}`}>
                    {warehouse.warehouse_name}
                  </Link>
                  <img src={chevron} alt="chevron icon" />
                </div>
                <p className="header__rowtitle-mobile">ADDRESS</p>
                <div className="warehouse__rows__address">{`${warehouse.address}, ${warehouse.city}, ${warehouse.country}`}</div>
              </div>
              <div className="warehouse__rows-right">
                <p className="header__rowtitle-mobile">CONTACT NAME</p>
                <div className="warehouse__rows__contactname">
                  {warehouse.contact_name}
                </div>
                <div className="warehouse__rows__contactinfo">
                  <p className="header__rowtitle-mobile">CONTACT INFORMATION</p>
                  <p>{warehouse.contact_phone}</p>
                  <p>{warehouse.contact_email}</p>
                </div>
                <div className="action__icons">
                  <IconButton
                    actionType="delete"
                    onClick={() => handleDeleteWarehouseItem(warehouse.id)}
                  />
                  <IconButton
                    actionType="edit"
                    actionFunction={handleEditInventoryItem}
                  />
                </div>
              </div>
            </div>
            <div className="Mobile_layout">
              <IconButton
                actionType="delete"
                actionFunction={() => handleDeleteWarehouseItem(warehouse.id)}
              />
              <IconButton
                actionType="edit"
                actionFunction={handleEditInventoryItem}
              />
            </div>
            {showDeleteModal && (
  <DeleteWarehouse
    itemID={warehouseId} 
    sampleName={warehouse.warehouse_name} 
    onDeleteClick={handleDeleteConfirm}
    onCancelClick={handleCancelDelete}
  />
)}

          </div>
        ))}
      </div>
    </div>
  );
}

export default Warehouses;
