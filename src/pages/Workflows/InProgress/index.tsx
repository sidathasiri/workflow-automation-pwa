import { Collapse } from 'antd';
import Workflow from '../../../components/Workflow';

function InProgressWorkflowsPage() {
  return (
    <div>
      <h1>In Progress Workflows</h1>
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
          {
            key: '3',
            label: 'Workflow 3',
            children: <Workflow />,
          },
        ]}
      />
    </div>
  );
}

export default InProgressWorkflowsPage;
