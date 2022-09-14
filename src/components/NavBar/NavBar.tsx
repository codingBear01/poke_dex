import React from 'react';
import * as S from './style';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  const handleTransferPage = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    const pageName = e.currentTarget.dataset['value'];
    navigate(`/pokemon-${pageName}`);
  };

  return (
    <nav>
      <S.NavBarUl>
        <li>
          <S.NavBarBtn data-value="info" onClick={handleTransferPage}>
            Info
          </S.NavBarBtn>
        </li>
        <li>
          <S.NavBarBtn
            style={{
              width: '130px',
            }}
          >
            Evolutionary Chain
          </S.NavBarBtn>
        </li>
        <li>
          <S.NavBarBtn data-value="stats">Stats</S.NavBarBtn>
        </li>
        <li>
          <S.NavBarBtn data-value="moves" onClick={handleTransferPage}>
            Moves
          </S.NavBarBtn>
        </li>
        <li>
          <S.NavBarBtn>Locations</S.NavBarBtn>
        </li>
        <li>
          <S.NavBarBtn>Weakness</S.NavBarBtn>
        </li>
      </S.NavBarUl>
    </nav>
  );
};

export default NavBar;
