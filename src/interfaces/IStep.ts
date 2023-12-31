export interface IStep {
  [key: string]: string | null;
  id: string;
  title: string;
  description: string;
  status: string;
  started: string | null;
  completed: string | null;
}
