import MainHeader from "../../components/MainHeader/MainHeader";
import InventoryList from "../../components/InventoryList/InventoryList";

import { useState, useEffect } from "react";
import axios from "axios";

const inventoryURL = `${process.env.REACT_APP_URL}:${process.env.REACT_APP_PORT}/api/inventories`;

function Inventory() {
  const [inventory, setInventory] = useState(null);

  // Loads a list of videos from API
  useEffect(() => {
    getInventoryList();
  }, []);

  const getInventoryList = () => {
    axios
      .get(inventoryURL)
      .then((response) => {
        setInventory(response.data);
      })
      .catch((error) => {
        console.log("There was an issue retriving data from the API.");
      });
  };

  return (
    <div className="mainContent__container">
      <MainHeader
        title="Inventory"
        backButton="false"
        searchAndAdd="true"
        addButtonText="Add New Item"
        addButtonPath="/inventory/new"
      />
      {inventory && <InventoryList inventoryList={inventory} refreshInventoryListFunction={getInventoryList} />}
    </div>
  );
}

export default Inventory;
