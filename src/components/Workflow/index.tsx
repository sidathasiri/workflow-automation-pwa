import React, { useState } from 'react';
import { Divider } from 'antd';
import WorkflowSteps from '../WorkflowSteps';
import StepDetails from '../StepDetails';

const Workflow = ({ steps }: { steps: any[] }) => {
  const [current, setCurrent] = useState(0);

  const onChange = (value: number) => {
    setCurrent(value);
  };

  const items = steps.map((step) => ({
    title: step.title,
    description: step.description,
  }));

  return (
    <>
      <WorkflowSteps items={items} current={current} onChange={onChange} />

      <Divider />

      <StepDetails stepData={steps[current]} />
    </>
  );
};

export default Workflow;
