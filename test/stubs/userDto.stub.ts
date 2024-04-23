import { CreateUserDto } from '../../src/user/dto/create-user.dto';
import { UpdateUserDto } from '../../src/user/dto/update-user.dto';
import Rol from '../../src/user//entities/user.rol';

export const CreateUserDTOStub = (): CreateUserDto => {
  return {
    _id: 'testId',
    email: 'test@example.com',
    username: 'testuser',
    password: 'testpassword',
    rol: Rol.ADMIN,
  };
};

export const UserDTOStub = (): UpdateUserDto => {
  return {
    _id: 'testId',
    email: 'test@example.com',
    username: 'testuser',
    password: 'testpassword',
    rol: Rol.ADMIN,
    almanac: [[]],
  };
};
