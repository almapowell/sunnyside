import React from "react";
import { Form, Input } from "antd";

const TextFields = ({ onInputChange }) => {
  return (
    <div>
      <Form.Item
        name="First Name"
        rules={[{ required: true }]}
        label="First Name"
      >
        <Input name="first" onChange={onInputChange} />
      </Form.Item>
      <Form.Item
        name="Last Name"
        rules={[{ required: true }]}
        label="Last Name"
      >
        <Input name="last" onChange={onInputChange} />
      </Form.Item>
      <Form.Item name="Email" rules={[{ required: true }]} label="Email">
        <Input name="email" onChange={onInputChange} />
      </Form.Item>
      <Form.Item
        name="Street Address"
        rules={[{ required: true }]}
        label="Street Address"
      >
        <Input name="street" onChange={onInputChange} />
      </Form.Item>
      <Form.Item name="City" rules={[{ required: true }]} label="City">
        <Input name="city" onChange={onInputChange} />
      </Form.Item>
      <Form.Item name="State" rules={[{ required: true }]} label="State">
        <Input name="state" onChange={onInputChange} />
      </Form.Item>
      <Form.Item name="Zip" rules={[{ required: true }]} label="Zip">
        <Input name="zip" onChange={onInputChange} />
      </Form.Item>
      <Form.Item name="Phone" rules={[{ required: true }]} label="Phone Number">
        <Input name="phone" onChange={onInputChange} />
      </Form.Item>
    </div>
  );
};

export default TextFields;
