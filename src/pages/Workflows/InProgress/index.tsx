import { Collapse } from 'antd';
import Workflow from '../../../components/Workflow';
import CreateBusinessCards from '../../../templates/CreateBusinessCards.json';

function InProgressWorkflowsPage() {
  console.log(CreateBusinessCards);

  return (
    <div>
      <h1>In Progress Workflows</h1>
      <Collapse
        accordion
        items={[
          {
            key: '1',
            label: 'Workflow 1',
            children: <Workflow steps={CreateBusinessCards.steps} />,
          },
          {
            key: '2',
            label: 'Workflow 2',
            children: <Workflow steps={CreateBusinessCards.steps} />,
          },
        ]}
      />
    </div>
  );
}

export default InProgressWorkflowsPage;
