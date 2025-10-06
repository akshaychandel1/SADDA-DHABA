// WhatsAppButton.jsx
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Button = () => {
  const phoneNumber = "+447944296922"; // Replace with your WhatsApp number
  const message = "Hello! I want to chat."; // Default message

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#C20000",
        color: "#fff",
        borderRadius: "50%",
        width: "65px",
        height: "65px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        cursor: "pointer",
        zIndex: 1000,
      }}
    >
      <FaWhatsapp size={45} />
    </a>
  );
}

export default Button;
