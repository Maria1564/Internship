import React, { Component } from "react";

import { Routes, Route } from "react-router-dom";
import "./Content.css";
import AnimalCatalog from "../AnimalCatalog/AnimalCatalog";
import Home from "../Home/Home";
import Contacts from "../Contacts/Contacts";

export class Content extends Component {
  render() {
    return (
      <main className="content">
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="ourPets" element={<AnimalCatalog />} />
          <Route path="contacts" element={<Contacts/>} />
        </Routes>
      </main>
    );
  }
}

export default Content;
