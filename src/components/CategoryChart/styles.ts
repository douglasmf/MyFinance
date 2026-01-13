import styled from 'styled-components';
import { theme } from '../../themes/theme';

export const Container = styled.section`
  max-width: 1120px;
  margin: 2rem auto;
  padding: 1.5rem;
  background: ${theme.colors.shape};
  border-radius: 0.5rem;
  min-height: 400px;

  h2 {
    color: ${theme.colors.title};
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
    text-align: center;
  }
`;