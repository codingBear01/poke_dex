import React from 'react';
import * as C from './style';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  const handleTransferPage = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    const pageName = e.currentTarget.dataset['value'];
    navigate(`/pokemon-${pageName}`);
  };

  return (
    <nav>
      <C.NavBarUl>
        <li>
          <C.NavBarBtn data-value="info" onClick={handleTransferPage}>
            Info
          </C.NavBarBtn>
        </li>
        <li>
          <C.NavBarBtn data-value="moves" onClick={handleTransferPage}>
            Moves
          </C.NavBarBtn>
        </li>
        <li>
          <C.NavBarBtn>Locations</C.NavBarBtn>
        </li>
        <li>
          <C.NavBarBtn>Weakness</C.NavBarBtn>
        </li>
        <li>
          <C.NavBarBtn>Evolutionary Chain</C.NavBarBtn>
        </li>
      </C.NavBarUl>
    </nav>
  );
};

export default NavBar;
