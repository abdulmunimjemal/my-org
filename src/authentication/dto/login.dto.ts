import { OmitType } from '@nestjs/mapped-types';
import { CreateUserDto } from '../../users/dto';

export class LoginDto extends OmitType(CreateUserDto, [
  'firstName',
  'lastName',
  'departmentId',
]) {}
