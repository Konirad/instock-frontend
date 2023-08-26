import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../src/pages/Home/Home.js'
import NotFound from '../src/pages/NotFound/NotFound.js';
import Warehouses from '../src/pages/Warehouses/Warehouses.js';
import Inventory from '../src/pages/Inventory/Inventory.js'

function App() {
  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="warehouses" element={<Warehouses />} />
        <Route path="inventory" element={<Inventory />} />
        <Route path="404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
  
}

export default App;
