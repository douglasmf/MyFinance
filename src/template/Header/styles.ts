import styled from 'styled-components';
import { theme } from '../../themes/theme';

export const Container = styled.header`
  background: ${theme.colors.shape};
  padding: 2rem 0 8rem; 
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: #fff;
    background: ${theme.colors.primary};
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s;

    @media (max-width: 480px) {
      padding: 0 1rem;
      font-size: 0.875rem;
      height: 2.5rem;
    }
  }
`;

export const LogoArea = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  .icon {
    font-size: 1.5rem;
  }

  h1 {
    font-size: 1.5rem;
    color: ${theme.colors.title};
    font-weight: ${theme.fonts.bold};
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 1.125rem; 
    }}
`;