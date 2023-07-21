import { IStep } from './step';

export interface IWorkflow {
  id: string;
  title: string;
  description: string;
  status: string;
  steps: IStep[];
}
