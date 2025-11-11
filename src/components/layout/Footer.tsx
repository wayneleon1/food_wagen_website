import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      style={{ background: "#2c2c2c", color: "white", padding: "3rem 2rem" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2rem",
            marginBottom: "2rem",
          }}
        >
          {/* Company Section */}
          <div>
            <h4
              style={{
                fontWeight: "bold",
                marginBottom: "1rem",
                fontSize: "16px",
              }}
            >
              Company
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li style={{ marginBottom: "0.5rem" }}>
                <a
                  href="#"
                  style={{
                    color: "#ccc",
                    textDecoration: "none",
                    fontSize: "14px",
                  }}
                >
                  About us
                </a>
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                <a
                  href="#"
                  style={{
                    color: "#ccc",
                    textDecoration: "none",
                    fontSize: "14px",
                  }}
                >
                  Team
                </a>
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                <a
                  href="#"
                  style={{
                    color: "#ccc",
                    textDecoration: "none",
                    fontSize: "14px",
                  }}
                >
                  Careers
                </a>
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                <a
                  href="#"
                  style={{
                    color: "#ccc",
                    textDecoration: "none",
                    fontSize: "14px",
                  }}
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4
              style={{
                fontWeight: "bold",
                marginBottom: "1rem",
                fontSize: "16px",
              }}
            >
              Contact
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li style={{ marginBottom: "0.5rem" }}>
                <a
                  href="#"
                  style={{
                    color: "#ccc",
                    textDecoration: "none",
                    fontSize: "14px",
                  }}
                >
                  Help & Support
                </a>
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                <a
                  href="#"
                  style={{
                    color: "#ccc",
                    textDecoration: "none",
                    fontSize: "14px",
                  }}
                >
                  Partner with us
                </a>
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                <a
                  href="#"
                  style={{
                    color: "#ccc",
                    textDecoration: "none",
                    fontSize: "14px",
                  }}
                >
                  Ride with us
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h4
              style={{
                fontWeight: "bold",
                marginBottom: "1rem",
                fontSize: "16px",
              }}
            >
              Legal
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li style={{ marginBottom: "0.5rem" }}>
                <a
                  href="#"
                  style={{
                    color: "#ccc",
                    textDecoration: "none",
                    fontSize: "14px",
                  }}
                >
                  Terms & Conditions
                </a>
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                <a
                  href="#"
                  style={{
                    color: "#ccc",
                    textDecoration: "none",
                    fontSize: "14px",
                  }}
                >
                  Refund & Cancellation
                </a>
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                <a
                  href="#"
                  style={{
                    color: "#ccc",
                    textDecoration: "none",
                    fontSize: "14px",
                  }}
                >
                  Privacy Policy
                </a>
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                <a
                  href="#"
                  style={{
                    color: "#ccc",
                    textDecoration: "none",
                    fontSize: "14px",
                  }}
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div>
            <h4
              style={{
                fontWeight: "bold",
                marginBottom: "1rem",
                fontSize: "16px",
              }}
            >
              FOLLOW US
            </h4>
            <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
              <a href="#" style={{ color: "#ccc", fontSize: "20px" }}>
                📷
              </a>
              <a href="#" style={{ color: "#ccc", fontSize: "20px" }}>
                📘
              </a>
              <a href="#" style={{ color: "#ccc", fontSize: "20px" }}>
                🐦
              </a>
            </div>
            <p
              style={{ marginBottom: "1rem", fontSize: "14px", color: "#ccc" }}
            >
              Receive exclusive offers in your mailbox
            </p>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <input
                type="email"
                placeholder="Enter Your email"
                style={{
                  flex: 1,
                  padding: "0.5rem 0.75rem",
                  borderRadius: "6px",
                  border: "none",
                  fontSize: "14px",
                }}
              />
              <button
                className="food-btn food-btn-primary"
                style={{
                  padding: "0.5rem 1rem",
                  borderRadius: "6px",
                  fontWeight: 600,
                  cursor: "pointer",
                  border: "none",
                  background: "#ffa500",
                  color: "white",
                  fontSize: "14px",
                }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          style={{
            borderTop: "1px solid #444",
            paddingTop: "1.5rem",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
            fontSize: "14px",
            color: "#999",
          }}
        >
          <span>All rights Reserved © Your Company, 2021</span>
          <span>Made with ❤️ by Themewagon</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
