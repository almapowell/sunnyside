import React from "react";
import RentalForm from "./RentalForm";
import ImageCarousel from "./ImageCarousel";
import Hook from "./Hook";
import "./styles.css";

const LandingPage = () => {
  return (
    <div className="background-img">
      <div className="form-container">
        <ImageCarousel />
        <RentalForm />
      </div>
      <Hook />
    </div>
  );
};

export default LandingPage;
