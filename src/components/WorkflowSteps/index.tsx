import { StepProps, Steps } from 'antd';

const WorkflowSteps = ({
  items,
  current,
  onChange,
}: {
  items: StepProps[];
  current: number;
  onChange: any;
}) => {
  return <Steps current={current} onChange={onChange} items={items} />;
};

export default WorkflowSteps;
