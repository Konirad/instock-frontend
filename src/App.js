import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home/Home.js";
import NotFound from "../src/pages/NotFound/NotFound.js";
import Warehouses from "../src/pages/Warehouses/Warehouses.js";
import Inventory from "../src/pages/Inventory/Inventory.js";



//Componenets

import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="warehouses" element={<Warehouses />} />
<<<<<<< Updated upstream
					<Route path="warehouses/:id" element={<WarehouseDetails />} />
=======
				
                    <Route path="warehouses/:id" element={<WarehouseDetails />} />
>>>>>>> Stashed changes
					<Route path="inventory" element={<Inventory />} />
					<Route path="*" element={<NotFound />} />
					
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
