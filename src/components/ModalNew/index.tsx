// src/components/NewTransactionModal/index.tsx
import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { addTransaction, updateTransaction } from '../../store/slices/financeSlice';
import { v4 as uuidv4 } from 'uuid';
import * as S from './styles';
import type { Transaction } from '../../types/Transaction';

interface ModalNewProps {
  isOpen: boolean;
  onRequestClose: () => void;
  editingTransaction: Transaction | null;
}

export const ModalNew = ({ isOpen, onRequestClose, editingTransaction }: ModalNewProps) => {
  const dispatch = useAppDispatch();

  // Estados do formulário
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState<number | ''>('');
  const [category, setCategory] = useState('');
  const [type, setType] = useState<'deposito' | 'saida'>('deposito');

  useEffect(() => {
    if (editingTransaction) {
      setTitle(editingTransaction.title);
      setAmount(editingTransaction.amount);
      setCategory(editingTransaction.category);
      setType(editingTransaction.type);
    } else {
      setTitle('');
      setAmount('');
      setCategory('');
      setType('deposito');
    }
  }, [editingTransaction, isOpen]);

  const handleSubmit = (event: React.FormEvent) => {
  event.preventDefault();

  if (!title || Number(amount) <= 0 || !category) {
    alert('Por favor, preencha todos os campos corretamente.');
    return;
  }

  const transactionData = {
    id: editingTransaction ? editingTransaction.id : uuidv4(),
    title,
    amount: Number(amount),
    category,
    type,
    createdAt: editingTransaction ? editingTransaction.createdAt : new Date().toISOString(),
  };

  if (editingTransaction) {
    dispatch(updateTransaction(transactionData));
  } else {
    dispatch(addTransaction(transactionData));
  }

  setTitle('');
  setAmount(0);
  setCategory('');
  onRequestClose();
};

  if (!isOpen) return null;

  return (
    <S.Overlay onClick={(e) => {
    if (e.target === e.currentTarget) onRequestClose();
    }}>
      <S.Content>
        <button className="close-button" onClick={onRequestClose}>X</button>
        
        <form onSubmit={handleSubmit}>
          <h2>{editingTransaction ? 'Editar transação' : 'Cadastrar transação'}</h2>

          <input 
            placeholder="Título" 
            value={title}
            onChange={e => setTitle(e.target.value)}
          />

          <input 
            type="number" 
            placeholder="Valor" 
            value={amount === 0 ? '' : amount}
            onChange={e => setAmount(e.target.value === '' ? '' : Number(e.target.value))}
          />

          <S.TransactionTypeContainer>
            <S.RadioBox 
              type="button" 
              onClick={() => setType('deposito')}
              isActive={type === 'deposito'}
              activeColor="green"
            >
              <span>Entrada</span>
            </S.RadioBox>

            <S.RadioBox 
              type="button" 
              onClick={() => setType('saida')}
              isActive={type === 'saida'}
              activeColor="red"
            >
              <span>Saída</span>
            </S.RadioBox>
          </S.TransactionTypeContainer>

          <input 
            placeholder="Categoria" 
            value={category}
            onChange={e => setCategory(e.target.value)}
          />

          <button type="submit">{editingTransaction ? 'Salvar' : 'Cadastrar'}</button>
        </form>
      </S.Content>
    </S.Overlay>
  );
};