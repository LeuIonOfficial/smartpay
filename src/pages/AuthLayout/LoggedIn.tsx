import { ReactNode } from "react";
import { Button, Col, Row } from "antd";
import styled from "styled-components";
import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const StyledSider = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;

  justify-content: space-between;
  margin: 10px;
`;

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  span {
    margin-bottom: 20px;
  }
`;

const Content = styled.div`
  margin: 10px;
`;

const LoggedIn = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  return (
    <>
      <Row>
        <Col span={3}>
          <StyledSider>
            <Nav>
              <Button type="text" style={{ height: "50px" }}>
                <UserOutlined style={{ fontSize: "24px", margin: "10px" }} />
              </Button>
              <Button type="text" onClick={() => navigate("/u/home")}>
                Home
              </Button>
              <Button type="text" onClick={() => navigate("/u/statistics")}>
                Statistics
              </Button>
              <Button type="text">Dashboard</Button>
              <Button type="text">Generate QR</Button>
            </Nav>
            <Button type="text" style={{ alignSelf: "flex-start" }}>
              Log out
            </Button>
          </StyledSider>
        </Col>
        <Col span={21}>
          <Content>{children}</Content>
        </Col>
      </Row>
    </>
  );
};
export default LoggedIn;
