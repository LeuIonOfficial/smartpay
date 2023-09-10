import { FloatButton, Table } from "antd";
// import { Table } from "@/components/ui/table.tsx";
import { useEffect } from "react";
import StyledPage from "../../../components/StyledPage.tsx";
import { useState } from "react";
import GenerateQrModal from "./GenerateQrModal/GenerateQrModal.tsx";
import { columns, transactionData } from "./constants.tsx";
import DemoHistogram from "./Histogram/Histogram/index.tsx";
// import axios from "axios";

const Home = () => {
  // const [transactionData, setTransactionsData] = useState([]);
  const [modalState, setModalState] = useState<boolean>(false);

  // useEffect(() => {
  //   async function getTransactions() {
  //     const data = await axios.get(
  //       "http://localhost:3000/api/transactions/getAll"
  //     );
  //     console.log(data.data);
  //   }

  //   getTransactions();
  // }, []);

  return (
    <StyledPage>
      <br />
      <Table
        columns={columns}
        dataSource={transactionData}
        style={{ width: "100%" }}
      />
      <DemoHistogram />
      <FloatButton onClick={() => setModalState(true)} />
      <GenerateQrModal modalState={modalState} setModalState={setModalState} />
    </StyledPage>
  );
};

export default Home;
