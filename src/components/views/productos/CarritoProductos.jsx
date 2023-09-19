import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const CarritoProductos = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: "80px",
        right: "5px",
        zIndex: "1000",
      }}
    >
      <div
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          background: "#000",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        <FontAwesomeIcon
          icon={faShoppingCart}
          style={{ fontSize: "1.5em", color: "#fff" }}
        />
      </div>
    </div>
  );
};

export default CarritoProductos;
