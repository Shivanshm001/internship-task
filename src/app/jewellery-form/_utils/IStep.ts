export interface IStep {
    id: number;
    title: string,
    description: string;
    note: string;
    options: string[],
    additionalAction?: {
      ifYes: string;
    }
  }