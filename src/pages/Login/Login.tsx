import { useState } from "react";

interface data {
  name: string;
  iban: string;
  password: string;
  email: string;
  bic: string;
  idno: string;
}
const Login = () => {
  const [data, setData] = useState<data>({
    name: "",
    iban: "",
    password: "",
    email: "",
    bic: "",
    idno: "",
  });
  return (
    <div className="max-w-[500px]">
      Login page
      <input className="input_default" />
    </div>
  );
};

export default Login;
