import React from "react";

const Footer = () => {
  return (
    <footer>
      <div
        style={{
          width: "100%",
          minHeight: "20vh",
          maxHeight: "30vh",
          marginTop: 60,
          backgroundColor: "#f0f0f0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "20px 0",
        }}
      >
        <h2 style={{ color: "#333", marginBottom: 10 }}>Stay Connected</h2>
        <p style={{ color: "#666", fontSize: 16 }}>
          Follow us on social media for the latest updates and news.
        </p>
        <div style={{ marginTop: 20 }}>
          <a
            href="#"
            style={{
              marginRight: 10,
              color: "#007bff",
              textDecoration: "none",
            }}
          >
            Facebook
          </a>
          <a
            href="#"
            style={{
              marginRight: 10,
              color: "#007bff",
              textDecoration: "none",
            }}
          >
            Twitter
          </a>
          <a
            href="#"
            style={{
              marginRight: 10,
              color: "#007bff",
              textDecoration: "none",
            }}
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
