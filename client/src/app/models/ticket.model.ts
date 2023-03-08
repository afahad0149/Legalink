export interface Ticket {
  _id: string;
  clientName: string;
  clientEmail: string;
  clientId: string;
  lawyerId: string;
  title: string;
  description: string;
  state?: string;
  createdAt?: number;
  date?: string;
}
