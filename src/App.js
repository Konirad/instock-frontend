import React from "react";
import Header from "./Components/Header/Header"; // Your Header component
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter> {/* Use BrowserRouter instead of Router */}
      <div>
        <Header />
        <Routes>
          {/* <Route path="/warehouse" element={<WarehouseComponent />} /> */}
          {/* <Route path="/inventory" element={<InventoryComponent />} /> */}
          {/* Other routes */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
