import styled from 'styled-components';
import { colors, alignments } from '../../style';

export const PokemonInfoWrap = styled.div`
  ${alignments.center};
  flex-direction: column;
  width: 600px;
  margin: 0 auto;
`;

export const PokemonInfoBox = styled.div`
  ${alignments.flexStart};
  width: 100%;
  height: 45px;
`;

export const PokemonInfoTitle = styled.div`
  ${alignments.center};
  width: 200px;
  height: 100%;
  background-color: ${colors.grey};
  box-shadow: 0 0 2px ${colors.black};
  font-weight: 600;
`;

export const PokemonInfoContent = styled.div`
  ${alignments.center};
  width: 100%;
  height: 100%;
  background-color: ${colors.white};
  box-shadow: 0 0 2px ${colors.black};
  font-weight: 600;
`;

export const PokemonInfoTypeImg = styled.span`
  width: 57px;
  height: 25px;
  margin: 0 12.5px;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const PokemonInfoContentSpan = styled.span`
  margin: 0 7.5px;
`;
