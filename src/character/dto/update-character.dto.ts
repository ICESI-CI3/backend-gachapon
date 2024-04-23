import { IsNotEmpty } from "class-validator";
import { CreateCharacterDto } from './create-character.dto';

export class UpdateCharacterDto extends CreateCharacterDto {
    @IsNotEmpty()
    _id: string
}
