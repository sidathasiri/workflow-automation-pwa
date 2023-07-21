import { Collapse } from 'antd';
import Workflow from '../../../components/Workflow';
import CreateBusinessCards from '../../../mockData/inprogress/CreateBusinessCards.json';
import Onboarding from '../../../mockData/inprogress/Onboarding.json';
import { IWorkflow } from '../../../interfaces/workflow';

function InProgressWorkflowsPage() {
  const fetchedData: IWorkflow[] = [Onboarding, CreateBusinessCards];
  const items = fetchedData.map((workflow) => ({
    key: workflow.id,
    label: workflow.title,
    children: <Workflow steps={workflow.steps} />,
  }));

  return (
    <div>
      <h1>In Progress Workflows</h1>
      <Collapse accordion items={items} />
    </div>
  );
}

export default InProgressWorkflowsPage;
