import { Collapse } from 'antd';
import Workflow from '../../../components/Workflow';
import CreateBusinessCards from '../../../templates/CreateBusinessCards.json';

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
            children: <Workflow steps={CreateBusinessCards.steps} />,
          },
        ]}
      />
    </div>
  );
}

export default CompletedWorkflowsPage;
