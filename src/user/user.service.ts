import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './schema/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Request } from 'express';
import { UnauthorizedException } from '@nestjs/common';
import { jwtConstants } from '../auth/jwt.constants';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModule: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user= await this.userModule.create(createUserDto);
    return user;
  }

  async findAll(): Promise<User[]> {
    return await this.userModule.find({});
  }

  async findOne(id: string) {
    return await this.userModule.findById(id);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return  await this.userModule.findByIdAndUpdate(id,updateUserDto);
  }

  async remove(id: string) {
    return await this.userModule.findByIdAndDelete(id);
  }

  async updateSelf(_id:Types.ObjectId, updateUserDto: UpdateUserDto){
    return await this.userModule.findByIdAndUpdate(_id, updateUserDto);
  }

  async removeSelf(_id:Types.ObjectId){
    return await this.userModule.findByIdAndDelete(_id);
  }
}
