import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsNotEmpty } from 'class-validator';
import { Types } from 'mongoose';
export class UpdateUserDto extends CreateUserDto {
  @IsNotEmpty()
  _id: string;
  almanac: any[][];
}
