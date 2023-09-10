import { useState } from "react";
import axios from "axios";
import Button from "../../components/ui/Button";
import { useDispatch } from "react-redux";
import { setUser } from "../../authSlice";
import { useNavigate } from "react-router-dom";

interface data {
  name: string;
  iban: string;
  password: string;
  email: string;
  bic: string;
  idno: string;
}

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState<data>({
    name: "",
    iban: "",
    password: "",
    email: "",
    bic: "",
    idno: "",
  });

  const handleChange = (e: any) => {
    setData((prev: any) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    if (
      data.name !== "" &&
      data.email !== "" &&
      data.password !== "" &&
      data.bic !== "" &&
      data.idno !== "" &&
      data.iban !== ""
    ) {
      const user = await axios.post(
        "http://localhost:3000/api/users/register",
        JSON.stringify(data),
        {
          headers: {
            "Content-Type": "application/json",
            credentials: "true",
          },
        }
      );

      if (true) {
        navigate("/u/home");
      }
      // console.log(user);

      dispatch(setUser({ user: user.data }));
    }
  };

  return (
    <>
      <div className="flex flex-col h-screen justify-center items-center">
        <h3 className="text-[36px]  logo">SmartPay</h3>
        <p className="text-[#1d1d1d]/[0.75] mb-[50px]">Creează un cont!</p>
        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-[10px] w-[500px]"
        >
          <input
            className="input_default !w-full"
            value={data.name}
            id="name"
            onChange={handleChange}
            type="text"
            placeholder="Introduceți numele"
          />
          <input
            className="input_default !w-full"
            value={data.email}
            id="email"
            onChange={handleChange}
            type="email"
            placeholder="Introduceți emailul"
          />
          <input
            className="input_default !w-full"
            value={data.iban}
            id="iban"
            onChange={handleChange}
            type="text"
            placeholder="Introduceți codul iban"
          />
          <input
            className="input_default !w-full"
            value={data.password}
            id="password"
            onChange={handleChange}
            type="password"
            placeholder="Creați o parolă"
          />
          <input
            className="input_default !w-full"
            value={data.bic}
            id="bic"
            onChange={handleChange}
            type="text"
            placeholder="Introduceți codul bic"
          />
          <input
            className="input_default !w-full"
            value={data.idno}
            id="idno"
            onChange={handleChange}
            type="text"
            placeholder="Introduceți codul idno"
          />
          <Button onClick={onSubmit} className="!mt-4 !py-[12px]">
            Submit
          </Button>
        </form>
      </div>
    </>
  );
};
export default Register;
