import { IsNotEmpty } from "class-validator";
import { CreateWeaponDto } from './create-weapon.dto';

export class UpdateWeaponDto extends CreateWeaponDto {
    @IsNotEmpty()
    _id: string
}