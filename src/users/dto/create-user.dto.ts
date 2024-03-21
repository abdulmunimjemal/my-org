import {
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  readonly email;

  @IsString()
  @MinLength(8, { message: 'Password must be at least 8 characters long' })
  readonly password;

  @IsString()
  readonly firstName;

  @IsString()
  @IsOptional()
  readonly lastName?;

  @IsOptional()
  readonly departmentId?: number;
}
