import React from "react";
import "./App.css"
import Home from "./pages/home/Home";
import { Outlet, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import SideBar from "./components/sidebar";
import Register from "./pages/sinup.jsx/Register";
import Messages from "./pages/messages";

function Layout() {
  return (
    <div className="page_layout">
      <Navbar />
      <SideBar />
      <main className='main'>
        <Outlet />
      </main>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/other" element={<>Other routes</>} />
      </Route>
      <Route path="/login" element={<>Login</>} />
      <Route path="/signup" element={<Register/>} />
    </Routes>
  )

}

export default App;
