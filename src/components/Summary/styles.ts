// src/components/Summary/styles.ts
import styled from 'styled-components';
import { theme } from '../../themes/theme';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -5rem; /* Faz os cards subirem para cima do Header */
  max-width: 1120px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 2rem;

  div {
    background: ${theme.colors.shape};
    padding: 1.5rem 2rem;
    border-radius: 0.5rem;
    color: ${theme.colors.title};
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1rem;

      p {
        font-size: 1rem;
        color: ${theme.colors.text};
      }

      .icon {
        font-weight: bold;
        &.success { color: ${theme.colors.success}; }
        &.danger { color: ${theme.colors.danger}; }
        &.total { color: ${theme.colors.primary}; }
      }
    }

    strong {
      display: block;
      font-size: 2rem;
      font-weight: ${theme.fonts.medium};
      line-height: 3rem;
    }

    /* Card de destaque (Total) */
    &.highlight-background {
      background: ${theme.colors.primary};
      color: #fff;
      
      p { color: rgba(255,255,255,0.8); }
    }
  }

  /* Responsividade para Tablets e Celulares */
  @media (max-width: 900px) {
    grid-template-columns: 1fr; /* Empilha os cards no tablet/mobile se preferir */
    gap: 1rem;
  }

  /* Alternativa: Scroll horizontal no Mobile */
  @media (max-width: 720px) {
    display: flex;
    overflow-x: auto;
    padding-bottom: 1rem;
    
    div {
      min-width: 280px; /* Garante que o card não esmague */
    }
  }
`;