import styled from 'styled-components';
import { colors, alignments } from '../../style';

export const SpriteAreaWrap = styled.div`
  ${alignments.center}
  flex-direction: column;
  width: 800px;
`;

export const SpriteAreaTitleWrap = styled.div`
  box-sizing: border-box;
  ${alignments.flexStart}
  width: 100%;
  padding: 10px 10px 10px 230px;
  background-color: ${colors.black};
  transform: skew(-20deg);
`;

export const SpriteAreaPokeball = styled.span`
  width: 20px;
  height: 20px;
  background-image: url('/assets/imgs/pokeball-pixel.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const SpriteAreaTitle = styled.span`
  margin: 0 10px;
  font-size: 20px;
  font-weight: 700;
`;
