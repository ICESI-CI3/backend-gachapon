import { CreateUserDto } from '../../src/user/dto/create-user.dto';
import { UpdateUserDto } from '../../src/user/dto/update-user.dto';
import Rol from '../../src/user//entities/user.rol';

export const CreateUserDTOStub = (): CreateUserDto => {
  return {
    email: 'test@example.com',
    username: 'testuser',
    password: 'testpassword',
    rol: Rol.ADMIN,
    almanac: [[]],
  };
};

export const UserDTOStub = (): UpdateUserDto => {
  return {
    email: 'test@example.com',
    username: 'testuser',
    password: 'testpassword',
    rol: Rol.ADMIN,
    almanac: [[]],
  };
};
