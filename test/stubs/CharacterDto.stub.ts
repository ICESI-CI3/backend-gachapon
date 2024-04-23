import { UpdateCharacterDto } from 'src/character/dto/update-character.dto';
import Element from '../../src/character/entities/Element';

export const CharacterDTOStub = (): UpdateCharacterDto => {
  return {
    _id: 'testId',

    name: 'testName',

    element: Element.GEO,

    weapon: 'testWeapon',

    rarity: 4,

    constellation: 1,

    level: 1,

    img: 'testImg',
  };
};
