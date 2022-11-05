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
import "./assets/scss/global.scss"

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route element={<BootstrapWrapper />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/tickets/:id" element={<Ticket />} />
            <Route path="/my-account" element={<Account />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
