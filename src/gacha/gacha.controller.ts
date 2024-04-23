import { Controller, Get, UseGuards } from '@nestjs/common';
import { GachaService } from './gacha.service';
import { JwtAuthGuard, RolAuthGuard } from '../auth/jwt-auth.guard';
import { Roles } from '../decorator/rol.decorator';
import { GetUser } from '../decorator/get-user.decorator';


@Controller('gacha')
export class GachaController {
  constructor(
    private gachaService: GachaService,
    ) {}

  @Get('weapon1')
  @UseGuards(JwtAuthGuard, RolAuthGuard)
  @Roles(['PLAYER'])
  async getOneWeapon(@GetUser('_id') _id: string){
    const result = await this.gachaService.getOneWeapon();
    return this.gachaService.addToAlmanac(_id, result);
  }
  @Get('weapon10')
  @UseGuards(JwtAuthGuard, RolAuthGuard)
  @Roles(['PLAYER'])
  async getTenWeapons(@GetUser('_id') _id: string){
    const result = await this.gachaService.getTenWeapons();
    return this.gachaService.addToAlmanac(_id, result);

  }

  @Get('character1')
  @UseGuards(JwtAuthGuard, RolAuthGuard)
  @Roles(['PLAYER'])
  async getOneCharacter(@GetUser('_id') _id: string){
    const result = await this.gachaService.getOneCharacter();
    return this.gachaService.addToAlmanac(_id, result);

  }
  @Get('character10')
  @UseGuards(JwtAuthGuard, RolAuthGuard)
  @Roles(['PLAYER'])
  async getTenCharacter(@GetUser('_id') _id: string){
    const result = await this.gachaService.getTenCharacters();
    return this.gachaService.addToAlmanac(_id, result);

  }

}
