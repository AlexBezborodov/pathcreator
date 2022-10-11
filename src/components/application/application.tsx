import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "../../App.css";
import { Header } from "../header/header";
import { Layout } from "../layout";

export function Application() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="path/:pathId" element={<Layout />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
