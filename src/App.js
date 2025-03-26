import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePopX from "./WelcomePopX";
import CreatePopXAccount from "./Components/CreatePopXAccount";
import AccountSettings from "./Components/AccountSettings";
import Login from "./Components/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePopX />} />
        <Route path="/signup" element={<CreatePopXAccount />} />
        <Route path="/profile" element={<AccountSettings />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
