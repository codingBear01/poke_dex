import styled from 'styled-components';
import { colors, alignments } from '../../style';

export const MainSearchBoxWrap = styled.div`
  ${alignments.center}
  justify-content: space-evenly;
  flex-direction: column;
  width: 90%;
  height: 70%;
  margin: auto;
  color: white;
`;

export const MainPokemonLogoWrap = styled.div`
  ${alignments.center};
  width: 60%;
  height: 33%;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const MainSearchInputWrap = styled.div`
  ${alignments.center}
  width: 60%;
  height: 33%;

  input {
    width: 400px;
    height: 60px;
    padding: 0 15px;
    border: none;
    border-radius: 20px;
    font-size: 25px;
    font-family: inherit;

    &:focus {
      outline: none;
    }
  }
`;

export const MainSearchBtnWrap = styled.div`
  ${alignments.center}
  width: 60%;
  height: 33%;

  button {
    width: 250px;
    height: 60px;
    border: none;
    border-radius: 20px;
    background-color: ${colors.lightBlue};
    color: ${colors.white};
    font-size: 25px;
    cursor: pointer;
    font-weight: 600;
    font-family: inherit;
  }
`;

export const AppStyle = {
  display: 'flex',
  width: '100%',
  height: '100%',
  backgroundColor: `${colors.black}`,
};
