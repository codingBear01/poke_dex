import styled from 'styled-components';
import { colors, alignments } from '../../style';

export const MainSearchBoxWrap = styled.div`
  ${alignments.center}
  flex-direction: column;
  width: 500px;
  height: auto;
  margin: auto;
  border: 1px solid black;
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
    background-size: 85%;
  }
`;

export const MainSearchBoxInputWrap = styled.div`
  margin: 25px 0;

  input {
    width: 300px;
    height: 50px;
    padding-left: 20px;
    border: 1px solid ${colors.black};
    border-radius: 20px;
    outline: none;
    transition: all 0.2s linear;
    font-size: 18px;
  }

  input:focus {
    border: none;
    box-shadow: 0 0 4px ${colors.black};
    outline: 2px solid ${colors.yellow};
  }
`;

export const MainSearchBoxBtnWrap = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 280px;
  margin: 25px 0 50px;
  padding: 10px 0;
  border: none;
  border-radius: 25px;
  background-color: ${colors.lightBlue};
  font-size: 20px;
  font-weight: 600;
  font-family: inherit;
  transition: all 0.15s linear;

  span {
    width: 40px;
    height: 40px;
    background-image: url('/assets/imgs/pokeball.png');
    background-size: cover;
    background-repeat: no-repeat;
  }

  &:hover {
    background-color: ${colors.darkYellow};
    color: ${colors.white};
    cursor: pointer;
  }
`;

export const AppStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100vh',
};
