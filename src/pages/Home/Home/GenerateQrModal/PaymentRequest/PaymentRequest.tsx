import {
  Form,
  FormInstance,
  Input,
  InputNumber,
  Space,
  Typography,
} from "antd";
import FormItem from "antd/es/form/FormItem";
import axios from "axios";

const PaymentRequest = ({ form }: { form: FormInstance }) => {
  const handleSubmit = (data: { amount: number; service: string }) => {
    axios
      .post("http://localhost:3000/api/generate", JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <Space
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography>
        <h2>Create payment request</h2>
      </Typography>
      <Form
        colon={false}
        labelCol={{ span: "6" }}
        labelWrap={true}
        form={form}
        onFinish={handleSubmit}
      >
        <FormItem label="Service" name="service">
          <Input style={{ width: "200px" }} />
        </FormItem>
        <FormItem label="Amount" name="amount">
          <InputNumber style={{ width: "200px" }} defaultValue={0} />
        </FormItem>
      </Form>
    </Space>
  );
};

export default PaymentRequest;
