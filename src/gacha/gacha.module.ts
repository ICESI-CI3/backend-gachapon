import { Module } from '@nestjs/common';
import { GachaService } from './gacha.service';
import { GachaController } from './gacha.controller';
import { Character, CharacterSchema } from 'src/character/schema/character.schema';
import { Weapon, WeaponSchema } from 'src/weapon/schema/weapon.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/user/schema/user.schema';
import { CharacterModule } from 'src/character/character.module';
import { WeaponModule } from 'src/weapon/weapon.module';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    CharacterModule,WeaponModule,UserModule
  ],
  controllers: [GachaController],
  providers: [GachaService],
  
})
export class GachaModule {}
