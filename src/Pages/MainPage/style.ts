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
`;

export const MainPokemonLogo = styled.span`
  width: 100%;
  height: 200px;
  background-image: url('/assets/imgs/pokemon-logo-bw.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  &:hover {
    background-image: url('/assets/imgs/pokemon-logo-color.svg');
    background-size: 84%;
  }
`;

export const MainSearchBoxIconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const MainSearchBoxIcon = styled.span`
  width: 40px;
  height: 40px;
  background-image: url('/assets/imgs/pokemon-pixel-art.jpg');
  background-size: 240%;
  background-repeat: no-repeat;
  transition: all 0.15s ease-in;

  &:first-child {
    background-position: -2px -2px;
  }
  &:nth-child(2) {
    background-position: -38px -2px;
  }
  &:nth-child(3) {
    height: 33px;
    background-position: -8px -40px;
  }
  &:nth-child(4) {
    background-position: -46px -39px;
  }
  &:nth-child(5) {
    height: 33px;
    background-position: -9px -73px;
  }
  &:last-child {
    width: 30px;
    height: 30px;
    background-position: -36px -55px;
  }

  &:hover {
    transform: translateY(-25px);
  }
`;

export const MainSearchBoxInputWrap = styled.div`
  margin: 15px 0;
`;

export const MainSearchBoxInput = styled.input`
  width: 300px;
  height: 50px;
  padding-left: 20px;
  border-radius: 10px;
  outline: none;
  background-color: ${colors.black};
  font-size: 18px;
  color: ${colors.grey};
  transition: all 0.2s linear;

  &:focus {
    border: none;
    box-shadow: 0 0 7px ${colors.black};
    outline: 3px solid ${colors.darkYellow};
    background-color: ${colors.white};
    color: ${colors.black};
  }
`;

export const MainSearchBoxBtn = styled.button`
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

export const MainSearchBoxPokeballImg = styled.span`
  width: 30px;
  height: 30px;
  background-image: url('/assets/imgs/pokeball.png');
  background-size: cover;
  background-repeat: no-repeat;
`;

/* styles */
export const AlertMsgStyle = {
  color: `${colors.red}`,
  fontWeight: '600',
};
