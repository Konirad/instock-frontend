import { BrowserRouter, Routes, Route } from "react-router-dom";

import NotFound from "../src/pages/NotFound/NotFound.js";
import Warehouses from "../src/pages/Warehouses/Warehouses.js";
import Inventory from "../src/pages/Inventory/Inventory.js";
import WarehouseDetails from "../src/pages/WarehouseDetails/WarehouseDetails";
import InventoryDetails from "../src/pages/Inventorydetails/inventoryDetails.js";
import AddNewWarehouse from "../src/pages/AddNewWarehouse/AddNewWarehouse.js";
import AddNewInventory from "../src/pages/AddNewInventory/AddNewInventory.js";
import EditWarehouse from "./pages/EditWarehouse/EditWarehouse.js";
import EditInventoryItem from "./pages/EditInventoryItem/EditInventoryItem.js";

//Components
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Warehouses />} />
					<Route path="warehouses" element={<Warehouses />} />
					<Route path="warehouses/new" element={<AddNewWarehouse />} />
					<Route path="warehouses/:id" element={<WarehouseDetails />} />
					<Route path="warehouses/:id/edit" element={<EditWarehouse />} />
					<Route path="inventory" element={<Inventory />} />
					<Route path="inventory/new" element={<AddNewInventory />} />
					<Route path="inventory/:id" element={<InventoryDetails />} />
					<Route path="inventory/:id/edit" element={<EditInventoryItem />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
