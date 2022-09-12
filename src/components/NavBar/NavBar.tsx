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
          <button data-value="info" onClick={handleTransferPage}>
            Info
          </button>
        </li>
        <li>
          <button data-value="moves" onClick={handleTransferPage}>
            Moves
          </button>
        </li>
        <li>
          <button>Locations</button>
        </li>
        <li>
          <button>Weakness</button>
        </li>
        <li>
          <button>Evolutionary Chain</button>
        </li>
      </C.NavBarUl>
    </nav>
  );
};

export default NavBar;
