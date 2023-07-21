import { Steps } from 'antd';

const WorkflowSteps = ({
  items,
  current,
  onChange,
}: {
  items: any[];
  current: number;
  onChange: any;
}) => {
  return (
    <>
      <Steps current={current} onChange={onChange} items={items} />
    </>
  );
};

export default WorkflowSteps;
