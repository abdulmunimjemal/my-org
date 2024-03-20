import { IsOptional, IsNotEmpty, IsString } from 'class-validator';

export class CreateDepartmentDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  description: string;

  @IsOptional()
  managingDepartmentId: number;
}
