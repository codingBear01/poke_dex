import styled from 'styled-components';
import { colors, alignments } from '../../style';

export const PokemonInfoLeftWrap = styled.div`
  ${alignments.center}
  flex-direction: column;
  padding: 30px;
  border-radius: 5px;
`;

export const PokemonNameWrap = styled.div`
  ${alignments.center};
  padding: 5px 0;
  border-radius: 5px;
  box-shadow: 0 2px 3px ${colors.black};
  font-size: 24px;
  font-weight: 600;
`;

export const PokeballImg = styled.span`
  width: 20px;
  height: 20px;
  margin: 0 10px;
  background-image: url('/assets/imgs/pokeball-pixel.png');
  background-size: cover;
  background-repeat: no-repeat;
  font-family: inherit;
`;

export const PokemonSpriteWrap = styled.div`
  margin: 30px 0;
  padding: 30px;
  box-shadow: 0 2px 3px ${colors.black};
  border-radius: 5px;

  img {
    width: 130px;
    height: 130px;
  }
`;

export const PokemonInfoRaw = styled.div`
  ${alignments.spaceEvenly};
  width: 550px;
`;

export const PokemonInfoWrap = styled.div`
  ${alignments.center};
  border-radius: 10px;
  box-shadow: 0 2px 3px ${colors.black};
  background-color: ${colors.black};
`;

export const PokemonInfoTitle = styled.span`
  padding: 0 10px;
  border-radius: 10px 0 0 10px;
  background-color: ${colors.grey};
  font-size: 16px;
  font-weight: 700;
  line-height: 40px;
`;

export const PokemonInfoContent = styled.div`
  ${alignments.center};
  background-color: ${colors.black};
`;

export const PokemonTypeImgBox = styled.span`
  width: 57px;
  height: 25px;
  margin: 0 10px;
  border-radius: 5px;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const PokemonAbilBox = styled.span`
  padding: 0 10px;
  font-size: 16px;
  font-weight: 600;
  color: ${colors.white};

  &:last-child {
    border-radius: 0 10px 10px 0;
  }
`;

export const PokemonTypeImgWrap = styled.div``;

export const PokemonInfoRightDiv = styled.div``;
