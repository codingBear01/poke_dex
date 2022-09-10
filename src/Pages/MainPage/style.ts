import styled from 'styled-components';
import { colors, alignments } from '../../style';

/* components */
export const MainSearchBoxWrap = styled.div`
  ${alignments.center}
  flex-direction: column;
  width: 500px;
  height: auto;
  margin: auto;
`;

export const MainPokemonLogoWrap = styled.div`
  ${alignments.center};
  width: 100%;
  height: 100%;

  span {
    width: 100%;
    height: 200px;
    background-image: url('/assets/imgs/pokemon-logo-bw.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  &:hover span {
    background-image: url('/assets/imgs/pokemon-logo-color.svg');
    background-size: 84%;
  }
`;

export const MainSearchBoxIconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  span {
    width: 40px;
    height: 40px;
    background-image: url('/assets/imgs/pokemon-pixel-art.jpg');
    background-size: 240%;
    background-repeat: no-repeat;
    transition: all 0.15s ease-in;
  }

  span:first-child {
    background-position: -2px -2px;
  }
  span:nth-child(2) {
    background-position: -38px -2px;
  }
  span:nth-child(3) {
    height: 33px;
    background-position: -8px -40px;
  }
  span:nth-child(4) {
    background-position: -46px -39px;
  }
  span:nth-child(5) {
    height: 33px;
    background-position: -9px -73px;
  }
  span:last-child {
    width: 30px;
    height: 30px;
    background-position: -36px -55px;
  }

  span:hover {
    transform: translateY(-25px);
  }
`;

export const MainSearchBoxInputWrap = styled.div`
  margin: 15px 0;

  input {
    width: 300px;
    height: 50px;
    padding-left: 20px;
    border-radius: 10px;
    outline: none;
    background-color: ${colors.black};
    font-size: 18px;
    color: ${colors.grey};
    transition: all 0.2s linear;
  }

  input:focus {
    border: none;
    box-shadow: 0 0 7px ${colors.black};
    outline: 3px solid ${colors.darkYellow};
    background-color: ${colors.white};
    color: ${colors.black};
  }
`;

export const MainSearchBoxBtnWrap = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 240px;
  margin: 15px 0;
  padding: 8px 0;
  border: 3px solid ${colors.black};
  border-radius: 10px;
  background: none;
  font-size: 20px;
  font-weight: 600;
  font-family: inherit;
  transition: all 0.15s linear;

  span {
    width: 30px;
    height: 30px;
    background-image: url('/assets/imgs/pokeball.png');
    background-size: cover;
    background-repeat: no-repeat;
  }

  &:hover {
    border: 3px solid ${colors.darkYellow};
    box-shadow: 0 0 7px ${colors.black};
    background-color: ${colors.black};
    color: ${colors.white};
    cursor: pointer;

    span {
      background-image: url('/assets/imgs/pokeball-negative.png');
    }
  }
`;

/* styles */
export const AlertMsgStyle = {
  color: `${colors.red}`,
  fontWeight: '600',
};
