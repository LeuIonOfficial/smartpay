import { Skeleton } from "antd";
import StyledPage from "../../components/StyledPage.tsx";

const Home = () => {
  return (
    <StyledPage>
      <h1>Home page</h1>
      <Skeleton title={true} />
      <Skeleton />
      <Skeleton />
    </StyledPage>
  );
};

export default Home;
