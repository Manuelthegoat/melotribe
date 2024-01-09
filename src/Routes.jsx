import React from "react";
import { Route, Routes } from "react-router-dom";
import Section from "./Components/Section";
import Thanks from "./Components/Thanks";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Section />} />
        <Route path="/thanks-for-subscribing" element={<Thanks />} />
      </Routes>
    </>
  );
};

export default Routing;
