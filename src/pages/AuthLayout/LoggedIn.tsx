import { ReactNode } from "react";
import { Button } from "antd";
import { useNavigate, Link } from "react-router-dom";
// import Button from "src/components/ui/Button";

const LoggedIn = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <ul className="flex py-[20px] w-full justify-between items-center">
        <Button
          type="text"
          style={{
            fontSize: "20px",
            marginRight: "50px",
          }}
        >
          {/* <UserOutlined style={{ fontSize: "24px", margin: "10px" }} /> */}
          <Link className="text-[24px] logo" to="/">
            SmartPay
          </Link>
        </Button>
        <nav className="flex items-center">
          <Button
            style={{ fontSize: "18px" }}
            type="text"
            onClick={() => navigate("/u/home")}
          >
            Home
          </Button>
          <Button
            style={{ fontSize: "18px" }}
            type="text"
            onClick={() => navigate("/u/statistics")}
          >
            Statistics
          </Button>
          <Button style={{ fontSize: "18px" }} type="text">
            Dashboard
          </Button>
          <Button style={{ fontSize: "18px" }} type="text">
            Generate QR
          </Button>
        </nav>
        <button className="!bg-[#121619] text-[18px] text-white px-[12px] py-[8px] rounded-[12px] hover:[opacity:0.9] transition-all">
          Log out
        </button>
      </ul>
      {children}
    </div>
  );
};
export default LoggedIn;
