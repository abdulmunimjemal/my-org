import { IsOptional, IsNotEmpty, IsString } from 'class-validator';

export class CreateDepartmentDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsOptional()
  readonly description: string;

  @IsOptional()
  readonly managingDepartmentId: number;
}
