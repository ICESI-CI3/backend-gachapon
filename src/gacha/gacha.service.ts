import { Injectable } from '@nestjs/common';
import { CreateGachaDto } from './dto/create-gacha.dto';
import { UpdateGachaDto } from './dto/update-gacha.dto';
import { Character } from '../character/schema/character.schema';
import { Weapon } from '../weapon/schema/weapon.schema';
import { randomInt } from 'crypto';
import { CharacterService } from '../character/character.service';
import { WeaponService } from '../weapon/weapon.service';
import { UserService } from '../user/user.service';
import { UpdateUserDto } from '../user/dto/update-user.dto';
import Rol from '../user/entities/user.rol';

@Injectable()
export class GachaService {
  constructor(
    private readonly characterService: CharacterService,
    private readonly weaponService: WeaponService,
    private readonly userService: UserService,
  ){}

  create(createGachaDto: CreateGachaDto) {
    return 'This action adds a new gacha';
  }

  findOne(id: number) {
    return `This action returns a #${id} gacha`;
  }

  update(id: number, updateGachaDto: UpdateGachaDto) {
    return `This action updates a #${id} gacha`;
  }

  remove(id: number) {
    return `This action removes a #${id} gacha`;
  }

  async getOneCharacter(){
    let options:any[] = await this.characterService.findAll();
    let prob=randomInt(0, 1000);
    if(prob<=6){
      options=options.filter((char)=>char.rarity==5);
    }else{
      if(prob<=54){
        options=options.filter((char)=>char.rarity==4);
        let weapons=await this.weaponService.findAll();
        weapons=weapons.filter((obj)=>obj.rarity==4);
        options=[...options, ...weapons];
      }else{
        options=await this.weaponService.findAll();
        console.log(options);
        options=options.filter((obj)=>obj.rarity==3);
      }
    }
    prob=randomInt(0, options.length-1);

    let result:any[]=[]
    result.push(options[prob]);

    return result;
  }

  async getTenCharacters(){
    let result:any[]=[]
    for(let i=0;i<10;i++){
      result.push(await this.getOneCharacter());
    }
    return result;
  }

  async getOneWeapon(){
    let options:any[] = await this.weaponService.findAll();
    let prob=randomInt(0, 1000);
    if(prob<=6){
      options=options.filter((char)=>char.rarity==5);
    }else{
      if(prob<=54){
        options=options.filter((char)=>char.rarity==4);
        let weapons=await this.weaponService.findAll();
        weapons=weapons.filter((obj)=>obj.rarity==4);
        options=[...options, ...weapons];
      }else{
        options=await this.weaponService.findAll();
        console.log(options);
        options=options.filter((obj)=>obj.rarity==3);
        console.log(options);
      }
    }
    prob=randomInt(0, options.length-1);
    let result:any[]=[]
    result.push(options[prob]);
    return result;
  }

  async getTenWeapons(){
    let result:any[]=[]
    for(let i=0;i<10;i++){
      result.push(await this.getOneWeapon());
    }
    return result;
  }

  async addToAlmanac(id:string, elements: any[]){
    const user = await this.userService.findOne(id);
    const almanac = user.almanac;
    elements.forEach(element => {
      if (element instanceof Weapon ) {
        almanac[0].push(element);
      } else if (element instanceof Character) {
        almanac[1].push(element);
      }
    });
    const updateUser = new UpdateUserDto();
    updateUser._id = id;
    updateUser.almanac = almanac;
    updateUser.email = user.email;
    updateUser.password = user.password;
    updateUser.rol = user.rol as Rol;
    updateUser.username = user.username;

    return await this.userService.update(id, updateUser);
  }
}
