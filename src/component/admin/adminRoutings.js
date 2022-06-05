import { Switch } from "@mui/material";
import { Routes, BrowserRouter, Route, Navigate } from "react-router-dom";
import ProductScreen from "./products";
import AddProduct from "./addEditProduct";

function AdminRouting(props) {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<Navigate to="/admin/dashboard" replace={true} />}
      />
      <Route exact path="/dashboard" element={<h1>Dashboard</h1>} />
      <Route exact path="/inventory" element={<h1>Users</h1>} />
      <Route exact path="/order" element={<h1>Orders</h1>} />
      <Route exact path="/products" element={<ProductScreen/>} />
      <Route exact path="/addProduct" element={<AddProduct/>} />
      <Route exact path="/history" element={<h1>History</h1>} />
      <Route exact path="/shops" element={<h1>Shops</h1>} />
    </Routes>
  );
}

export default AdminRouting;
