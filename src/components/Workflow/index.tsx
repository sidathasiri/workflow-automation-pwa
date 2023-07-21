import React, { useState } from 'react';
import { Divider, StepProps } from 'antd';
import WorkflowSteps from '../WorkflowSteps';
import StepDetails from '../StepDetails';
import { IStep } from '../../interfaces';

const Workflow = ({ steps }: { steps: IStep[] }) => {
  const [current, setCurrent] = useState(0);

  const onChange = (value: number) => {
    setCurrent(value);
  };

  const items = steps.map((step) => ({
    title: step.title,
    description: step.description,
    status: step.status,
  }));

  return (
    <>
      <WorkflowSteps
        items={items as StepProps[]}
        current={current}
        onChange={onChange}
      />
      <Divider />
      <StepDetails stepData={steps[current]} />
    </>
  );
};

export default Workflow;
