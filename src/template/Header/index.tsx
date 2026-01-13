// src/templates/Header/index.tsx
import * as S from './styles';

interface HeaderProps {
  openModal: () => void;
}

export const Header = ({ openModal }: HeaderProps) => {
  return (
    <S.Container>
      <S.Content>
        <S.LogoArea>
          <div className="icon">💰</div>
          <h1>MyFinance</h1>
        </S.LogoArea>

        <button type="button" onClick={openModal}>
          Nova transação
        </button>
      </S.Content>
    </S.Container>
  );
};