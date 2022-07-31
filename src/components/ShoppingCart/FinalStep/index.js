import { DatePicker, Space, Form, Input, Radio, Switch } from "antd";

import React, { useState } from "react";
import QuoteSummary from "./QuoteSummary";
import "./styles.css";
import TextFields from "./TextFields";

const FinalStep = () => {
  const [state, setState] = useState({
    first: "",
    last: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    date: "",
    delivery: false,
    notes: "",
    referal: 0,
  });

  const onReferalChange = (e) => {
    console.log("radio checked", e.target.value);
    setState({
      ...state,
      referal: e.target.value,
    });
  };

  const onInputChange = (e) => {
    console.log(e.target);
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const onDateChange = (date, dateString) => {
    setState({
      ...state,
      date: dateString,
    });
  };

  const onDeliveryChange = (checked) => {
    console.log(`switch to ${checked}`);
    setState({
      ...state,
      delivery: checked,
    });
  };

  return (
    <div>
      <div>
        <h2>Quote Summary</h2>
        <QuoteSummary />
      </div>
      <h2>Customer Informaion</h2>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 19,
        }}
        layout="vertical"
      >
        <TextFields onInputChange={onInputChange} />

        <Form.Item label="Prefered Contact">
          <Radio.Group>
            <Space>
              <Radio value={1}>Email</Radio>
              <Radio value={2}>Phone</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label="Event Date"
          rules={[{ required: true }]}
          label="Event Date"
        >
          <DatePicker onChange={onDateChange} name="date" />
        </Form.Item>

        <Form.Item label="Pickup / Deliver" valuePropName="checked">
          <Switch onChange={onDeliveryChange} />
        </Form.Item>

        <Form.Item name="Additional Notes" label="Additional Notes">
          <Input.TextArea onChange={onInputChange} name="notes" />
        </Form.Item>
        <Form.Item label="Referral">
          <Radio.Group onChange={onReferalChange} value={state.referal}>
            <Space>
              <Radio value={1}>Word of Mouth</Radio>
              <Radio value={2}>Google</Radio>
              <Radio value={3}>Social Media</Radio>
              <Radio value={4}>Repeat Customer</Radio>
              <Radio value={5}>
                Other
                {state.referal === 5 ? (
                  <Input
                    style={{
                      width: 100,
                      marginLeft: 10,
                    }}
                    onChange={(e) =>
                      setState({
                        ...state,
                        referal: e.target.value,
                      })
                    }
                  />
                ) : null}
              </Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <div className="primary-button-wrapper">
          <div style={{ width: 300 }}>
            <button
              onClick={() => console.log(state)}
              className="primary-button"
            >
              Submit Quote Request
            </button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default FinalStep;
