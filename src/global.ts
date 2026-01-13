import { createGlobalStyle } from 'styled-components';
import { theme } from './themes/theme';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${theme.colors.background};
    color: ${theme.colors.title};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: 'Inter', sans-serif; 
    font-size: 1rem;
  }

  button {
    cursor: pointer;
    border: 0;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;