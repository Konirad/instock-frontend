import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import delet from "../../assets/Icons/delete_outline-24px.svg";
import edit from "../../assets/Icons/edit-24px.svg";
import chevron from "../../assets/Icons/chevron_right-24px.svg";
import "./Warehouses.scss";
import MainHeader from "../../components/MainHeader/MainHeader";
import HeaderRow from "../../components/HeaderRowTitle/HeaderRow";
import TableHeader from "../../components/TableHeader/TableHeader";
import TableLink from "../../components/TableLink/TableLink";

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

        <MainHeader title="Warehouses" backButton="false" searchAndAdd="true" addButtonText="Add New Warehouse" addButtonPath="/warehouses/new" />
        <div className="warehouseList">
        {/* <HeaderRow headers={headerData} /> */}
        <div className="table-header-row">
                <div className="column-extra-wide">
                    <TableHeader label="WAREHOUSE" sortable="true" />
                </div>
                <div className="column-extra-wide">
                    <TableHeader label="ADDRESS" sortable="true" />
                </div>
                <div className="column-wide">
                    <TableHeader label="CONTACT NAME" sortable="true" />
                </div>
                <div className="column-extra-wide">
                    <TableHeader label="CONTACT INFORMATION" sortable="true" />
                </div>
                <div className="column-normal">
                    <TableHeader label="ACTIONS"  />
                </div>
            </div>

        {warehouses.map((warehouse) => (
          <div className="warehouse" key={warehouse.id}>
            <div className="warehouse__rows inventory-item">
                <p className="warehouse__title-mobile--warehouse info__label">WAREHOUSE</p>
                <div className="warehouse__warehouseName column-extra-wide">
                <TableLink linkText={warehouse.warehouse_name} linkPath={`/warehouses/${warehouse.id}`} />
                </div>
                <p className="warehouse__title-mobile--address info__label">ADDRESS</p>
                <div className="warehouse__address column-extra-wide info__detail">{`${warehouse.address}, ${warehouse.city}, ${warehouse.country}`}</div>
                <p className="warehouse__title-mobile--contact info__label">CONTACT NAME</p>
                <div className="warehouse__contactName column-wide">{warehouse.contact_name}</div>
                  <p className="warehouse__title-mobile--info info__label">CONTACT INFORMATION</p>
                  <div className="warehouse__tablet-view-info column-extra-wide">
                  <p className="warehouse__title-mobile--phone info__detail">{warehouse.contact_phone}</p>
                  <p className="warehouse__title-mobile--email info__detail">{warehouse.contact_email}</p>
                  </div>
                <div class="warehouse__spacer"></div>
                <div className="action-buttons column-normal warehouse__actionButtons">
                  <div className="icon-button delete"></div>
                  <div className="icon-button edit"></div>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Warehouses;
