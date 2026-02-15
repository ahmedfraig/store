import React from "react";
import { Spinner } from "react-bootstrap";
import "../App.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <Spinner animation="border" role="status" style={{ width: "3rem", height: "3rem", color: "#0f3460" }}>
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default Loader;