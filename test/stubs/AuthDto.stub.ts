import { LoginAuthDto } from 'src/auth/dto/login-auth.dto';
import { RegisterAuthDto } from 'src/auth/dto/register-auth.dto';

export const LoginDTOStub = (): LoginAuthDto => {
  return {
    username: 'testuser',
    password: 'testpassword',
  };
};

export const RegisterDTOStub = (): RegisterAuthDto => {
  return {
    username: 'testuser',
    password: 'testpassword',
    email: 'test@email.com'
  };
};
