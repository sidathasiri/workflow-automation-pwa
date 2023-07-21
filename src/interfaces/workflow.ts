import { IStep } from './step';

export interface IWorkflow {
  title: string;
  description: string;
  status: string;
  steps: IStep[];
}
