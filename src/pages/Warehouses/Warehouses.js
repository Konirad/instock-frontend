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
              {/* <div className="warehouse__rows-left"> */}
                <p className="header__rowtitle-mobile--warehouse">WAREHOUSE</p>
                <div className="warehouse__warehouseName column-extra-wide">
                <TableLink linkText={warehouse.warehouse_name} linkPath={`/warehouses/${warehouse.id}`} />
                  {/* {<Link to={``}>{warehouse.warehouse_name}</Link>} */}
                </div>
                {/* </div> */}
                <p className="header__rowtitle-mobile--address">ADDRESS</p>
                <div className="warehouse__address column-extra-wide">{`${warehouse.address}, ${warehouse.city}, ${warehouse.country}`}</div>
              {/* </div> */}
              {/* <div className="warehouse__rows-right"> */}
                <p className="header__rowtitle-mobile--contact">CONTACT NAME</p>
                <div className="warehouse__contactName column-wide">{warehouse.contact_name}</div>
                {/* <div className="warehouse__contactInfo column-extra-wide"> */}
                  <p className="header__rowtitle-mobile--info">CONTACT INFORMATION</p>
                  <p className="header__rowtitle-mobile--phone">{warehouse.contact_phone}</p>
                  <p className="header__rowtitle-mobile--email">{warehouse.contact_email}</p>
                {/* </div> */}
                <div class="warehouse spacer"></div>
                <div className="action-buttons column-normal warehousePage">
                  <div className="icon-button delete"></div>
                  <div className="icon-button edit"></div>
                  
                  {/* <img className="action__icons__desktop" src={delet} alt="delete icon" />
                  <img className="action__icons__desktop" src={edit} alt="edit icon" /> */}
                </div>

              {/* </div> */}

            </div>
            {/* <div className="Mobile_layout">
              <img className="action__icons__mobile" src={delet} alt="delete icon" />
              <img className="action__icons__mobile" src={edit} alt="edit icon" />
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Warehouses;
