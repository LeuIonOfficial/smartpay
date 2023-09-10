import { Result } from "antd";

const ConfirmationOfPayment = () => {
  return (
    <Result
      status="success"
      title="Payment Successfully Recieved"
      subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
    />
  );
};

export default ConfirmationOfPayment;
