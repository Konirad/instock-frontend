import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home/Home.js";
import NotFound from "../src/pages/NotFound/NotFound.js";
import Warehouses from "../src/pages/Warehouses/Warehouses.js";
import Inventory from "../src/pages/Inventory/Inventory.js";
import InventoryDetails from './pages/Inventorydetails/InventoryDetails.js';

//Componenets
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";
import AddNewWarehouse from "./components/AddNewWarehouse/AddNewWarehouse.js";

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Warehouses/>} />
					<Route path="warehouses" element={<Warehouses />} />
					<Route path="warehouses/:id" element={<WarehouseDetails />} />
					<Route path="warehouses/new" element={<AddNewWarehouse />} />
					<Route path="inventory" element={<Inventory />} />
					<Route path="inventory/:id" element={<InventoryDetails />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
