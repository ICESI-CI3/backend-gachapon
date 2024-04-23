import { UpdateWeaponDto } from 'src/weapon/dto/update-weapon.dto';
import Type from "../../src/weapon/entities/type";

export const WeaponDTOStub = (): UpdateWeaponDto => {
  return {

    _id: 'testId',

    name: 'testName',

    type: Type.SWORD,

    level: 1,

    subStats: 'testStats',

    effect: 'testStats',

    rarity: 4,

    img: 'testImg',
  };
};
