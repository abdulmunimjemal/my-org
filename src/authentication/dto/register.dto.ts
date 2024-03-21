import { PickType } from '@nestjs/mapped-types';
import { CreateUserDto } from '../../users/dto';

export class RegisterDto extends PickType(CreateUserDto, [
  'firstName',
  'lastName',
  'email',
  'password',
]) {}
