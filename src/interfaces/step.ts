export interface IStep {
  id: string;
  title: string;
  description: string;
  status: string;
  started: string | null;
  completed: string | null;
}
