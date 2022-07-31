import { Table, Typography } from "antd";
import React from "react";
import { useSelector } from "react-redux";
const { Text } = Typography;
const columns = [
  {
    title: "Quantity",
    dataIndex: "cartQuantity",
    width: 150,
  },
  {
    title: "Product",
    dataIndex: "title",
  },
  {
    title: "Est. Price",
    dataIndex: "total",
  },
];

const data = [
  {
    key: "1",
    title: "John Brown",
    cartQuantity: 10,
    total: 33,
  },
  {
    key: "2",
    title: "Jim Green",
    cartQuantity: 100,
    total: 0,
  },
  {
    key: "3",
    title: "Joe Black",
    cartQuantity: 10,
    total: 10,
  },
  {
    key: "4",
    title: "Jim Red",
    cartQuantity: 75,
    total: 45,
  },
];

const QuoteSummary = () => {
  const { cartItems } = useSelector((state) => state.cart);

  console.log(cartItems);
  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        bordered
        summary={(pageData) => {
          let totalCartPrice = 0;
          pageData.forEach(({ cartQuantity, total }) => {
            totalCartPrice += total;
          });
          return (
            <>
              <Table.Summary.Row>
                <Table.Summary.Cell index={0} colSpan={2}>
                  Estimated Total Price
                </Table.Summary.Cell>

                <Table.Summary.Cell index={1}>
                  <Text>{totalCartPrice}</Text>
                </Table.Summary.Cell>
              </Table.Summary.Row>
            </>
          );
        }}
      />
    </>
  );
};

export default QuoteSummary;
