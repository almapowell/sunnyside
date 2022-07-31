import React, { useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import ContactModal from "./ContactModal";
import { ShoppingCartOutlined } from "@ant-design/icons";

const Header = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div>
      <div className="header-container">
        <Link to="/">
          <span className="logo">Sunnyside Events</span>
        </Link>
        <div>
          <button
            className="contactBtn"
            onClick={() => setIsModalVisible(true)}
          >
            CONTACT US
          </button>
          <Link
            to="/shopping-cart"
            style={{ textDecoration: "none", color: "white" }}
          >
            <ShoppingCartOutlined className="shoppingCart" />
          </Link>
        </div>
      </div>
      <nav
        style={{
          padding: 30,
          paddingBottom: "1rem",
        }}
      >
        <Link to="/categories">Categories</Link> |
        <Link to="/landing-page">LandingPage</Link>
      </nav>

      <ContactModal
        setIsModalVisible={setIsModalVisible}
        isModalVisible={isModalVisible}
      />
    </div>
  );
};

export default Header;
