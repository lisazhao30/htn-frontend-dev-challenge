import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from "./components/navbar";
import HomePage from "./pages/homepage";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import EventsPage from "./pages/eventspage";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Router>
      <Routes>
        <Route path="/" element={[<NavBar />, <HomePage />]}/>
        <Route path="/events" element={[<NavBar />, <EventsPage isLoggedIn={isLoggedIn}/>]}/>
        <Route path="/login" element={[<NavBar />, <LoginPage setIsLoggedIn={setIsLoggedIn}/>]}/>
        <Route path="/register" element={[<NavBar />, <RegisterPage setIsLoggedIn={setIsLoggedIn}/>]}/>
      </Routes>
    </Router>
  );
}

export default App