import styled from 'styled-components';
import { colors, alignments } from '../../style';

export const PokemonInfoLeftWrap = styled.div`
  ${alignments.center}
  flex-direction: column;
  border: 1px solid black;
`;

export const PokemonNameWrap = styled.div`
  ${alignments.center};
  padding: 5px 0;
  border-radius: 5px;
  box-shadow: 0 2px 3px ${colors.black};
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

export const PokemonSpriteWrap = styled.div`
  margin-top: 30px;

  img {
    border-radius: 5px;
    box-shadow: 0 2px 3px ${colors.black};
  }
`;

export const PokemonTypeWrap = styled.div`
  ${alignments.center};
  flex-direction: column;

  span {
    width: 57px;
    height: 25px;
    margin-top: 5px;
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

export const PokemonTypeImgWrap = styled.div``;

export const PokemonInfoRightDiv = styled.div``;
