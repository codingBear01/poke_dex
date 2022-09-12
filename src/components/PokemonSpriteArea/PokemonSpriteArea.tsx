import React from 'react';
import * as C from './style';
import { PokemonSpriteAreaProps } from '../../store/interfaces';
import { alignments } from '../../style';

const PokemonSpriteArea = ({
  name,
  officialSprite,
  indexNumber,
  color,
}: PokemonSpriteAreaProps) => {
  return (
    <>
      <C.SpriteAreaWrap>
        <C.SpriteAreaTitleWrap>
          <C.SpriteAreaPokeball></C.SpriteAreaPokeball>
          <C.SpriteAreaTitle style={{ color: `${color}` }}>
            No. {indexNumber} {name}
          </C.SpriteAreaTitle>
          <C.SpriteAreaPokeball></C.SpriteAreaPokeball>
        </C.SpriteAreaTitleWrap>
        <img src={officialSprite} alt={name} />
      </C.SpriteAreaWrap>
    </>
  );
};

export default PokemonSpriteArea;
