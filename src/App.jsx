import { useState } from 'react'
import Navbar from './components/Navbar'
import AddNew from './components/AddNew'
import { Home } from "./Pages/Home";
import Update from './Pages/Update';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Table } from "./Pages/Table";
import { More } from "./Pages/More";

export default function App() {
  return (
    <>
      <div>
        <div className="container">
          <Navbar />
          <AddNew />
          <BrowserRouter>
            <Routes>
              <Route path="/update/:contactId" element={<Update />}></Route>
              <Route path="/" element={<Table />}></Route>
              <Route path="/Home" element={<Home />}></Route>
              <Route path="/details/:contactId" element={<More />}></Route>
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}