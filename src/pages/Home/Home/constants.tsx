import { Tag } from "antd";
import { ColumnsType } from "antd/es/table";

interface TransactionType {
  key: string;
  date: string;
  description: string;
  amount: number;
  paymentMethod: string;
  customerName: string;
  category: string;
  tags: string[];
}

// "_id": "64fd7f6a3fe55f70fd4b6356",
// "fromAccount": "00000000011",
// "toIDNO": "1234364494125",
// "iban": "MD12BANK1234567890123412",
// "bic": "MOLDMI22XXX",
// "amount": 192,
// "currency": "MDL",
// "destination": "Order 1",
// "createdAt": "2023-09-10T08:33:46.711Z",

export const columns: ColumnsType<TransactionType> = [
  {
    title: "Date",
    dataIndex: "date",
    key: "createAt",
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
    render: (amount) => `$${amount.toFixed(2)}`,
  },
  {
    title: "Payment Method",
    dataIndex: "paymentMethod",
    key: "paymentMethod",
  },
  {
    title: "Customer Name",
    dataIndex: "customerName",
    key: "customerName",
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
  },
  {
    title: "Transaction ID",
    dataIndex: "key",
    key: "key",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: () => {
      return (
        <>
          <Tag color="green">Approved</Tag>
        </>
      );
    },
  },
];

export const transactionData: TransactionType[] = [
  {
    key: "1",
    date: "2023-09-01",
    description: "Subscription Payment",
    amount: 100.0,
    paymentMethod: "Credit Card",
    customerName: "John Doe",
    category: "Subscription",
    tags: ["magazine", "subscription"],
  },
  {
    key: "2",
    date: "2023-09-05",
    description: "Ad Revenue",
    amount: 500.0,
    paymentMethod: "PayPal",
    customerName: "Jane Smith",
    category: "Advertising",
    tags: ["magazine", "advertising"],
  },
  {
    key: "3",
    date: "2023-09-10",
    description: "Subscription Payment",
    amount: 120.0,
    paymentMethod: "Credit Card",
    customerName: "Alice Johnson",
    category: "Subscription",
    tags: ["magazine", "subscription"],
  },
  {
    key: "4",
    date: "2023-09-15",
    description: "Ad Revenue",
    amount: 600.0,
    paymentMethod: "Bank Transfer",
    customerName: "Bob Williams",
    category: "Advertising",
    tags: ["magazine", "advertising"],
  },
];
