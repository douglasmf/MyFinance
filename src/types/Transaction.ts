export interface Transaction {
  id: string;
  title: string;
  amount: number;
  type: 'deposito' | 'saida'; 
  category: string;
  createdAt: string;
}

