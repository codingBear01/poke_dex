import React from 'react';
import * as S from './style';
import { PokemonSpriteAreaProps } from '../../store';

const PokemonSpriteArea = ({
  name,
  officialSprite,
  indexNumber,
  color,
}: PokemonSpriteAreaProps) => {
  return (
    <>
      <S.SpriteAreaWrap>
        <S.SpriteAreaTitleWrap>
          <S.SpriteAreaPokeball></S.SpriteAreaPokeball>
          <S.SpriteAreaTitle style={{ color: `${color}` }}>
            No. {indexNumber} {name}
          </S.SpriteAreaTitle>
          <S.SpriteAreaPokeball></S.SpriteAreaPokeball>
        </S.SpriteAreaTitleWrap>
        <img src={officialSprite} alt={name} />
      </S.SpriteAreaWrap>
    </>
  );
};

export default PokemonSpriteArea;
