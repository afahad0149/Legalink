export interface Ticket {
  _id: string;
  clientId: string;
  lawyerId: string;
  title: string;
  description: string;
  state?: string;
  createdAt?: number;
}
