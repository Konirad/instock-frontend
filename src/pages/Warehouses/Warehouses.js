import React, { useState, useEffect } from "react";
//import { useHistory } from 'react-router-dom';

import sort from "../../assets/Icons/sort-24px.svg";
import delet from "../../assets/Icons/delete_outline-24px.svg";
import edit from "../../assets/Icons/edit-24px.svg";
import chevron from "../../assets/Icons/chevron_right-24px.svg";
import search from "../../assets/Icons/search-24px.svg";
import axios from "axios";

import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import "./Warehouse.scss";



function Warehouses() {

   const [warehouses, setWarehouses] = useState([]);
   //const history = useHistory();

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
  //  const handleAddWarehouseClick = () => {
    
  //   history.push('../addwearhouse.js'); 
  // };

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
               { <Link to="/addwarehouse">
                  <Button text="Add New Warehouse" style="secondary" icon="+"
                   />
               </Link> }
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
                           { <Link to={`/WarehouseDetails/${warehouse.id}`}>
                              {warehouse.warehouse_name}
                           </Link> }
                           <img src={chevron} alt="chevron icon" />
                        </div>
                    
                        <div className="address-column">{`${warehouse.address}, ${warehouse.city}, ${warehouse.country}`}</div>
                     
                        </div>
                        <div className="warehouse__rows__right">
                           {warehouse.contact_name}
                        <div className="contact_info">
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
