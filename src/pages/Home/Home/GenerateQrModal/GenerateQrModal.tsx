import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import { Button, Col, Modal, Row } from "antd";
import { useStepItems } from "./useStepItems.ts";
import StepSidebar from "./StepSideBar/StepSideBar.tsx";
import { useForm } from "antd/es/form/Form";
// import Button from "../../../../components/ui/Button.tsx";

interface Props {
  modalState: boolean;
  setModalState: Dispatch<SetStateAction<boolean>>;
}

const GenerateQrModal = ({ modalState, setModalState }: Props) => {
  const [current, setCurrent] = useState<number>(0);
  const [loaded, setLoaded] = useState(false);
  const stepItems = useStepItems();
  const [form] = useForm();

  const Content = useMemo(
    () => stepItems[current]?.content,
    [current, stepItems]
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoaded(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const handleSubmit = () => {
    if (loaded) {
      form.submit();
      setCurrent(current + 1);
      if (current === 2) {
        setModalState(false);
        setCurrent(0);
      }
    }
  };
  const handleReturn = () => {
    if (current !== 0) {
      setCurrent(current - 1);
    } else {
      setModalState(false);
      setCurrent(0);
    }
  };

  return (
    <Modal
      open={modalState}
      onCancel={() => {
        setModalState(false);
        setCurrent(0);
      }}
      width="70%"
      bodyStyle={{ height: "70%" }}
      footer={[
        <Button key="back" onClick={handleReturn}>
          Return
        </Button>,
        <Button key="submit" onClick={handleSubmit}>
          Submit
        </Button>,
      ]}
    >
      <Row>
        <Col span={4}>
          <StepSidebar current={current} />
        </Col>
        <Col span={20}>{!!stepItems[current] && <Content form={form} />}</Col>
      </Row>
    </Modal>
  );
};
export default GenerateQrModal;
