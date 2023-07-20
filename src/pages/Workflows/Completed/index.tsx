import { Collapse } from 'antd';
import Workflow from '../../../components/Workflow';

function CompletedWorkflowsPage() {
  return (
    <div>
      <h1>Completed Workflows</h1>
      <Collapse
        accordion
        items={[
          {
            key: '1',
            label: 'Workflow 1',
            children: <Workflow />,
          },
          {
            key: '2',
            label: 'Workflow 2',
            children: <Workflow />,
          },
        ]}
      />
    </div>
  );
}

export default CompletedWorkflowsPage;
