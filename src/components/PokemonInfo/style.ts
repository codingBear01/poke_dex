import styled from 'styled-components';
import { colors, alignments } from '../../style';

export const PokemonInfoLeftDiv = styled.div`
  ${alignments.center}
  flex-direction: column;
  border: 1px solid black;
`;

export const NameWrap = styled.div`
  ${alignments.center}
  font-size: 24px;
  font-weight: 600;

  span {
    width: 20px;
    height: 20px;
    margin: 0 10px;
    background-image: url('/assets/imgs/pokeball-pixel.png');
    background-size: cover;
    background-repeat: no-repeat;
    font-family: inherit;
  }
`;

export const PokemonInfoImgDiv = styled.div``;

export const PokemonInfoRightDiv = styled.div``;
