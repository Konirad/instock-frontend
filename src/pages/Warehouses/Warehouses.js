import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import delet from "../../assets/Icons/delete_outline-24px.svg";
import edit from "../../assets/Icons/edit-24px.svg";
import chevron from "../../assets/Icons/chevron_right-24px.svg";
import "./Warehouses.scss";
import MainHeader from "../../components/MainHeader/MainHeader";
import HeaderRow from "../../components/HeaderRowTitle/HeaderRow";

function Warehouses() {
  const [warehouses, setWarehouses] = useState([]);

  useEffect(() => {
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
  const headerData = [
    { label: "WAREHOUSE", sortable: true },
    { label: "ADDRESS", sortable: true },
    { label: "CONTACT NAME", sortable: true },
    { label: "CONTACT INFORMATION", sortable: true },
    { label: "ACTIONS" },
  ];

  return (
    <div className="mainContent__container">
      <div className="warehouseList">
        <MainHeader title="Warehouses" backButton="false" searchAndAdd="true" addButtonText="Add New Warehouse" addButtonPath="/warehouses/new" />
        <HeaderRow headers={headerData} />
        {warehouses.map((warehouse) => (
          <div className="warehouse" key={warehouse.id}>
            <div className="warehouse__rows">
              <div className="warehouse__rows-left">
                <p className="header__rowtitle-mobile">WAREHOUSE</p>
                <div className="warehouse__rows__name">
                  {<Link to={`/warehouses/${warehouse.id}`}>{warehouse.warehouse_name}</Link>}
                  <img src={chevron} alt="chevron icon" />
                </div>
                <p className="header__rowtitle-mobile">ADDRESS</p>
                <div className="warehouse__rows__address">{`${warehouse.address}, ${warehouse.city}, ${warehouse.country}`}</div>
              </div>
              <div className="warehouse__rows-right">
                <p className="header__rowtitle-mobile">CONTACT NAME</p>
                <div className="warehouse__rows__contactname">{warehouse.contact_name}</div>
                <div className="warehouse__rows__contactinfo">
                  <p className="header__rowtitle-mobile">CONTACT INFORMATION</p>
                  <p>{warehouse.contact_phone}</p>
                  <p>{warehouse.contact_email}</p>
                </div>
                <div className="action__icons">
                  <img className="action__icons__desktop" src={delet} alt="delete icon" />
                  <img className="action__icons__desktop" src={edit} alt="edit icon" />
                </div>

              </div>

            </div>
            <div className="Mobile_layout">
              <img className="action__icons__mobile" src={delet} alt="delete icon" />
              <img className="action__icons__mobile" src={edit} alt="edit icon" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Warehouses;
