import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Account from "./pages/Account";
import NotFound from "./pages/NotFound";
import Event from "./pages/Event/Event";
import ProtectedRoute from "./ProtectedRoute";
import BootstrapWrapper from "./components/BootstrapWrapper";

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
            <Route path="/events/:id" element={<Event />} />
            <Route path="/my-account" element={<Account/>} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </>
  );
}

export default App;
