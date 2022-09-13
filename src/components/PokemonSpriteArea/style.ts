import styled from 'styled-components';
import { colors, alignments } from '../../style';

export const SpriteAreaWrap = styled.div`
  ${alignments.flexStart}
  flex-direction: column;
  width: 800px;
  height: 100vh;
`;

export const SpriteAreaTitleWrap = styled.div`
  box-sizing: border-box;
  ${alignments.center}
  width: 100%;
  height: 50px;
  padding: 10px;
  margin-top: 15px;
  margin-bottom: 50px;
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
