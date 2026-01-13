import {useState} from 'react'
import styled from 'styled-components';
import {theme} from './themes/theme';   
import {Header} from './template/Header';
import {Summary} from './components/Summary';
import {ModalNew} from './components/ModalNew';
import { TransactionsTable } from './components/TransactionsTable';
import { CategoryChart } from './components/CategoryChart';
import { useAppSelector } from './store/hooks';
import { selectSummary, selectAllTransactions } from './store/selectors/financeSelectors';
import type {Transaction} from './types/Transaction';

function App() {

  const [modalOpen, setModalOpen] = useState(false);
  const [editingTransaction, setEditingTransaction] = useState<Transaction | null>(null);
  const summary = useAppSelector(selectSummary);
  const transactions = useAppSelector(selectAllTransactions);

  const handleOpenModal = () => {
    setEditingTransaction(null);
    setModalOpen(true);
  }
  const handleOpenEditModal = (transaction: Transaction) => {
    setEditingTransaction(transaction);
    setModalOpen(true);
  }

  const EmptyState = styled.p`
    text-align: center;
    color: ${theme.colors.text};
    margin-top: 2rem;
    font-style: italic;
  `;


  return (
    <>
      <Header openModal={handleOpenModal} />
      <ModalNew 
        isOpen={modalOpen} 
        onRequestClose={() => setModalOpen(false)} 
        editingTransaction={editingTransaction} />
      <Summary />
       
      {summary.withdraws !== 0 && <CategoryChart />}
      {transactions.length > 0 ? (
        <TransactionsTable onEditTransaction={handleOpenEditModal} />
      ) : (

        <EmptyState>
              Nenhuma transação cadastrada
        </EmptyState>
      )}
  </>
  )
}

export default App
