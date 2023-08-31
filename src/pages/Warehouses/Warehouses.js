import React, { useState, useEffect } from "react";
<<<<<<< Updated upstream
import { useNavigate } from "react-router-dom";
=======
>>>>>>> Stashed changes

import sort from "../../assets/Icons/sort-24px.svg";
import delet from "../../assets/Icons/delete_outline-24px.svg";
import edit from "../../assets/Icons/edit-24px.svg";
import chevron from "../../assets/Icons/chevron_right-24px.svg";
import search from "../../assets/Icons/search-24px.svg";
import axios from "axios";
<<<<<<< Updated upstream

import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import "./Warehouse.scss";



function Warehouses() {

   const [warehouses, setWarehouses] = useState([]);
   const navigate = useNavigate();
=======
import "./Warehouses.scss";
import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

import addWarehouse from "../addWarehouse";

function Warehouses() {
   const [warehouses, setWarehouses] = useState([]);
>>>>>>> Stashed changes

   useEffect(() => {
      axios
         .get("http://localhost:8081/api/warehouses")
         .then((response) => {
            const data = response.data;
            setWarehouses(data);
         })
         .catch((error) => {
            console.error("Error fetching data:", error);
         });
   }, []);
<<<<<<< Updated upstream
   const handleAddWarehouseClick = () => {
    
   navigate('../addwearhouse.js'); 
   };
=======
>>>>>>> Stashed changes

   return (
      <div>
         <div className="warehouseList">
            <div className="warehouseList__header">
               <h1>Warehouses</h1>
               <div className="warehouse__header__input-container">
                  <input
                     className="warehouse__header__input"
                     type="text"
                     placeholder="Search..."
                  />
                  <img
                     className="warehouse__header__search-icon"
                     src={search}
                     alt="search icon"
                  />
               </div>
<<<<<<< Updated upstream
               { <Link to="/addwarehouse">
                  <Button text="Add New Warehouse" style="primary" icon="+"
                   onClick={handleAddWarehouseClick}/>
               </Link> }
=======
               <Link to="/addWarehouse">
                  <Button text="Add New Warehouse" style="secondary" icon="+" />
               </Link>
>>>>>>> Stashed changes
            </div>
            <div className="header-row">
               <div className="header__rowtitle">
                  Warehouse <img src={sort} alt="sort icon" />
               </div>
               <div className="header__rowtitle">
                  Address <img src={sort} alt="sort icon" />
               </div>
               <div className="header__rowtitle">
                  Contact Name <img src={sort} alt="sort icon" />
               </div>
               <div className="header__rowtitle">
                  Contact Information <img src={sort} alt="sort icon" />
               </div>
               <div>Actions</div>
            </div>
            {warehouses.map((warehouse) => (
               <div className="warehouse" key={warehouse.id}>
                  <div className="warehouse__rows">
                     <div className="warehouse__rows__left">
                        <div className="warehouse__name">
<<<<<<< Updated upstream
                           { <Link to={`/WarehouseDetails/${warehouse.id}`}>
                              {warehouse.warehouse_name}
                           </Link> }
=======
                           <Link to={`/WarehouseDetails/${warehouse.id}`}>
                              {warehouse.warehouse_name}
                           </Link>
>>>>>>> Stashed changes
                           <img src={chevron} alt="chevron icon" />
                        </div>
                    
                        <div className="address-column">{`${warehouse.address}, ${warehouse.city}, ${warehouse.country}`}</div>
<<<<<<< Updated upstream
                     
                        </div>
                        <div className="warehouse__rows__right">
                          <div className="warehouse__rows__rigt-name">
                           {warehouse.contact_name}
                           </div>
                        <div className="warehouse__rows__rigt-contactinfo">
=======
                        <div className="contact-name-column"></div>
                        </div>
                        <div className="warehouse__rows__right">
                           {warehouse.contact_name}
                        <div className="contact_info">
>>>>>>> Stashed changes
                           <p>{warehouse.contact_phone}</p>
                           <p>{warehouse.contact_email}</p>
                        </div>
                     </div>
                     
                  </div>
                  <div className="action__icons">
                        <img src={delet} alt="delete icon" />
                        <img src={edit} alt="edit icon" />
                     </div>
               </div>
            ))}
         </div>
      </div>
   );
}

export default Warehouses;
