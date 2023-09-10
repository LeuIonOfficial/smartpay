import { QRCode, Space } from "antd";

const GetQrCode = () => {
  return (
    <Space
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Payment order</h1>
      <p>Scan QR code</p>
      <QRCode type="canvas" value="https://ant.design/" />
    </Space>
  );
};

export default GetQrCode;
