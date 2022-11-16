import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Account from "./pages/Account";
import NotFound from "./pages/NotFound";
import Ticket from "./pages/Ticket/Ticket";
import ProtectedRoute from "./ProtectedRoute";
import BootstrapWrapper from "./components/BootstrapWrapper";
import { AuthProvider } from "./context/AuthContext";
import Tickets from "./pages/Tickets/Tickets";
import Admin from "./pages/Admin/Admin"
import OpeningSoon from "./pages/OpeningSoon/OpeningSoon"
import "./assets/scss/global.scss"
import { Helmet } from "react-helmet";

const App = () => {
  return (
    <>
      <AuthProvider>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/opening-soon" element={<OpeningSoon />} />

          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/tickets/:id" element={<Ticket />} />
            <Route path="/my-account" element={<Account />} />
            <Route element={<BootstrapWrapper />}>
              <Route path="/admin/*" element={<Admin />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
