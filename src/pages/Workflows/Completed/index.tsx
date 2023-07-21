import { Collapse } from 'antd';
import Workflow from '../../../components/Workflow';
import Recruitment from '../../../mockData/complete/Recruitment.json';
import { IWorkflow } from '../../../interfaces/workflow';

function CompletedWorkflowsPage() {
  const fetchedData: IWorkflow[] = [Recruitment];
  const items = fetchedData.map((workflow) => ({
    key: workflow.description,
    label: workflow.title,
    children: <Workflow steps={workflow.steps} />,
  }));

  return (
    <div>
      <h1>Completed Workflows</h1>
      <Collapse accordion items={items} />
    </div>
  );
}

export default CompletedWorkflowsPage;
