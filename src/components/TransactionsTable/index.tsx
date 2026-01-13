// src/components/TransactionsTable/index.tsx
import * as S from './styles';
import { useAppSelector,useAppDispatch } from '../../store/hooks';
import { selectAllTransactions } from '../../store/selectors/financeSelectors';
import { deleteTransaction } from '../../store/slices/financeSlice';
import type {Transaction} from '../../types/Transaction'

interface TransactionsTableProps {
  onEditTransaction: (transaction: Transaction) => void;
}

export const TransactionsTable = ({ onEditTransaction }: TransactionsTableProps) => {
  const transactions = useAppSelector(selectAllTransactions);
  const dispatch = useAppDispatch();

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  const formatDate = (date: string) => {
    return new Intl.DateTimeFormat('pt-BR').format(new Date(date));
  };

  return (
    <S.Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {transaction.type === 'saida' && '- '}
                {formatCurrency(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>{formatDate(transaction.createdAt)}</td>
              <td>
                <S.ActionButtons>
                  <button
                    onClick={() => onEditTransaction(transaction)}
                    title='Editar'>
                      ✏️
                  </button>
                  <button onClick={() => dispatch(deleteTransaction(transaction.id))} title="Excluir">
                    🗑️
                  </button>
                </S.ActionButtons>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {transactions.length === 0 && (
        <S.EmptyState>
          Nenhuma transação cadastrada ainda.
        </S.EmptyState>
      )}
    </S.Container>
  );
};