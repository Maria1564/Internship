import React, { Component } from "react";

import { Routes, Route } from "react-router-dom";
import "./Content.css";
import AnimalCatalog from "../AnimalCatalog/AnimalCatalog";
import Home from "../Home/Home";

export class Content extends Component {
  render() {
    return (
      <main className="content">
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="ourPets" element={<AnimalCatalog />} />
          <Route path="contacts" element={<h1>Contcts</h1>} />
        </Routes>
      </main>
    );
  }
}

export default Content;
