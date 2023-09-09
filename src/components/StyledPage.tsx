import { ReactNode } from "react";
import styled from "styled-components";

const CustomPage = styled.div`
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;
const StyledPage = ({ children }: { children: ReactNode }) => {
  return <CustomPage>{children}</CustomPage>;
};

export default StyledPage;
