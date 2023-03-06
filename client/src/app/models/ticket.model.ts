export interface Ticket {
  clientId: string;
  lawyerId: string;
  title: string;
  description: string;
  state?: string;
  createdAt?: number;
}
