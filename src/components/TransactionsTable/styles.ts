// src/components/TransactionsTable/styles.ts
import styled from 'styled-components';
import { theme } from '../../themes/theme';

export const Container = styled.div`
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 2rem;
  
  /* Permite scroll lateral em ecrãs pequenos */
  overflow-x: auto; 

  table {
    width: 100%;
    border-spacing: 0 0.5rem; /* Espaçamento entre as linhas */

    th {
      color: ${theme.colors.text};
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: ${theme.colors.shape};
      color: ${theme.colors.text};
      border-radius: 0.25rem;

      &:first-child {
        color: ${theme.colors.title};
      }

      &.deposit {
        color: ${theme.colors.success};
      }

      &.withdraw {
        color: ${theme.colors.danger};
      }
    }
  }

  @media (max-width: 480px) {
    table {
      min-width: 600px; 
    }
  }
`;
export const ActionButtons = styled.div`
  display: flex;
  gap: 0.8rem;
  justify-content: center;

  button {
    background: transparent;
    border: none;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.4rem;
    border-radius: 0.25rem;
    transition: all 0.2s;

    &:first-child { 
      color: ${theme.colors.primary};
      &:hover { background: rgba(99, 102, 241, 0.1); }
    }

    &:last-child { 
      color: ${theme.colors.danger};
      &:hover { background: rgba(239, 68, 68, 0.1); }
    }
  }
`;

export const EmptyState = styled.p`
  text-align: center;
  color: ${theme.colors.text};
  margin-top: 2rem;
  font-style: italic;
`;