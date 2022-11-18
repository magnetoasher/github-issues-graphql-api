export interface IssuesData {
  id: string;
  createdAt: string;
  title: string;
  author: {
    login: string;
  };
  state: string;
  url: string;
}
