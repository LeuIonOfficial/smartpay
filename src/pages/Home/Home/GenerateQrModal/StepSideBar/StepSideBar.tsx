import { Steps } from "antd";

import { useStepItems } from "../useStepItems.ts";
import { FC } from "react";

const StepSidebar: FC<{
  current: number;
}> = ({ current }) => {
  const stepItems = useStepItems();

  return (
    <Steps
      direction="vertical"
      size="small"
      current={current}
      items={stepItems}
    />
  );
};

export default StepSidebar;
