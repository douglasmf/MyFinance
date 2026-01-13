// src/components/NewTransactionModal/styles.ts
import styled,{keyframes} from 'styled-components';
import { theme } from '../../themes/theme';

// Animação para o fundo escuro (Overlay)
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

// Animação para o conteúdo do modal (Content)
const modalIn = keyframes`
  from { 
    opacity: 0;
    transform: translateY(30px) scale(0.9); 
  }
  to { 
    opacity: 1;
    transform: translateY(0) scale(1); 
  }
`;

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0; bottom: 0; right: 0; left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  animation: ${fadeIn} 0.3s ease-out;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 576px;
  background: ${theme.colors.shape};
  padding: 3rem;
  position: relative;
  border-radius: 0.5rem;

  animation: ${modalIn} 0.4s cubic-bezier(0.16, 1, 0.3, 1);

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h2 { color: ${theme.colors.title}; margin-bottom: 1rem; }

    input {
      background: ${theme.colors.background};
      border: 1px solid #2d3748;
      padding: 0 1.5rem;
      height: 4rem;
      border-radius: 0.25rem;
      color: white;
    }

    button[type="submit"] {
      background: ${theme.colors.primary};
      color: #fff;
      height: 4rem;
      border-radius: 0.25rem;
      font-weight: 600;
      margin-top: 1.5rem;
    }
  }

  .close-button {
    position: absolute;
    right: 1.5rem; top: 1.5rem;
    background: transparent;
    color: ${theme.colors.text};
  }
`;

export const TransactionTypeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

export const RadioBox = styled.button<RadioBoxProps>`
  height: 4rem;
  border: 1px solid #2d3748;
  border-radius: 0.25rem;
  background: ${(props) => props.isActive 
    ? (props.activeColor === 'green' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)')
    : 'transparent'
  };
  
  color: ${theme.colors.title};
  border-color: ${(props) => props.isActive 
    ? (props.activeColor === 'green' ? theme.colors.success : theme.colors.danger)
    : '#2d3748'
  };

  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.2s;
`;