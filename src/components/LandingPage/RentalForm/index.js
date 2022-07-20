import React from "react";
import "./styles.css";
import "antd/dist/antd.min.css";
import { DatePicker, Space, Checkbox } from "antd";
const { RangePicker } = DatePicker;

const RentalForm = () => {
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <div className="form">
      <span>Book Your Rental</span>
      <div className="date">
        <text>Select a Date</text>
        <Space direction="veritcal" size={12}>
          <RangePicker />
        </Space>
      </div>
      <div className="items">
        <text>Select Desired Items</text>
        <div>
          <Checkbox onChange={onChange}>Chairs</Checkbox>
          <Checkbox onChange={onChange}>Tables</Checkbox>
        </div>
      </div>
      <button className="next">Next Step</button>
    </div>
  );
};

export default RentalForm;
