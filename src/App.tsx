import {useState} from 'react'   
import {Header} from './template/Header';
import {Summary} from './components/Summary';
import {ModalNew} from './components/ModalNew';
import { TransactionsTable } from './components/TransactionsTable';
import { CategoryChart } from './components/CategoryChart';
import type {Transaction} from './types/Transaction'

function App() {

  const [modalOpen, setModalOpen] = useState(false);
  const [editingTransaction, setEditingTransaction] = useState<Transaction | null>(null);

  const handleOpenModal = () => {
    setEditingTransaction(null);
    setModalOpen(true);
  }
  const handleOpenEditModal = (transaction: Transaction) => {
    setEditingTransaction(transaction);
    setModalOpen(true);
  }


  return (
    <>
      <Header openModal={handleOpenModal} />
      <ModalNew 
        isOpen={modalOpen} 
        onRequestClose={() => setModalOpen(false)} 
        editingTransaction={editingTransaction} />
        
      <Summary />
      <CategoryChart />
      <TransactionsTable onEditTransaction={handleOpenEditModal} />
    </>
  )
}

export default App
