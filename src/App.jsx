
import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import ContactUs from "./pages/Contact/ContactUs";
import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
function App() {
  const currentUser =true;

  return (
    <>
      <Topbar />
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/home" element={<Homepage/>} />
        <Route path="/register" element={currentUser ? <Homepage /> : <Register />}/>
        <Route path="/login" element={currentUser ? <Homepage /> : <Login />} />
        <Route path="/post/:id" element={<Single />} />
        <Route path="/write" element={currentUser ? <Write /> : <Login />} />
        <Route path="/settings" element={currentUser ? <Settings /> : <Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />


      </Routes>
</>
  );
}

export default App;
