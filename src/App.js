import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Account from "./pages/Account";
import ProtectedRoute from "./ProtectedRoute";
import NotFound from "./pages/NotFound";
import BootstrapWrapper from "./components/BootstrapWrapper";
import OnlineTicket from "./pages/OnlineTicket/OnlineTicket";

const App = () => {
  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route element={<BootstrapWrapper/>}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected Routes */}
          <Route element={<ProtectedRoute/>}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/tickets/online" element={<OnlineTicket />} />
            <Route path="/my-account" element={<Account/>} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </>
  );
}

export default App;
