import React from "react";
import "./App.css"
import Home from "./pages/home/Home";
import { Outlet, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import SideBar from "./components/sidebar";

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
        <Route path="/other" element={<>Other routes</>} />
      </Route>
      <Route path="/login" element={<>Login</>} />
      <Route path="/signup" element={<>Login</>} />
    </Routes>
  )

}

export default App;
