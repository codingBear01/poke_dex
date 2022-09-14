import styled from 'styled-components';
import { colors, alignments } from '../../style';

export const NavBarUl = styled.ul`
  ${alignments.center}
  width: 600px;
  margin: 15px auto 35px auto;
  padding: 0;
`;

export const NavBarBtn = styled.button`
  width: 90px;
  height: 50px;
  margin: 0 2px;
  border-radius: 20px 20px 0 0;
  border: none;
  background-color: ${colors.black};
  font-size: 14px;
  font-weight: 600;
  color: ${colors.white};
  cursor: pointer;
`;
