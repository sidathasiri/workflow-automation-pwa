import { IStep } from './IStep';

export interface IWorkflow {
  id: string;
  title: string;
  description: string;
  status: string;
  steps: IStep[];
}
