// src/components/Summary/index.tsx
import * as S from './styles';
import { useAppSelector } from '../../store/hooks';
import { selectSummary } from '../../store/selectors/financeSelectors';

export const Summary = () => {
  const summary = useAppSelector(selectSummary);

  // Função simples para formatar moeda
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  return (
    <S.Container>
      <div>
        <header>
          <p>Entradas</p>
          <span className="icon success">↑</span>
        </header>
        <strong>{formatCurrency(summary.deposits)}</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <span className="icon danger">↓</span>
        </header>
        <strong>- {formatCurrency(summary.withdraws)}</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <span className="icon total">💰</span>
        </header>
        <strong>{formatCurrency(summary.total)}</strong>
      </div>
    </S.Container>
  );
};