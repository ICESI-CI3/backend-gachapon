import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { WeaponModule } from 'src/weapon/weapon.module';
import { CharacterModule } from 'src/character/character.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [WeaponModule,CharacterModule],
})
export class SeedModule {}
