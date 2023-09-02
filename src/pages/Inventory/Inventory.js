import MainHeader from "../../components/MainHeader/MainHeader";

import { useState, useEffect } from "react";
import axios from "axios";
import InventoryList from "../../components/InventoryList/InventoryList";

const inventoryURL = `${process.env.REACT_APP_URL}:${process.env.REACT_APP_PORT}/api/inventories`;

function Inventory() {
  const [inventory, setInventory] = useState(null);

  // Loads a list of videos from API
  useEffect(() => {
    axios
      .get(inventoryURL)
      .then((response) => {
        setInventory(response.data);
      })
      .catch((error) => {
        console.log("There was an issue retriving data from the API.");
      });
  }, []);

  return (
    <div className="mainContent__container">
      <MainHeader text="Inventory" backButton="displayNo" />
      {inventory && <InventoryList inventoryList={inventory} />}
    </div>
  );
}

export default Inventory;
