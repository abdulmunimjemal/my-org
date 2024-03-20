import { PartialType } from '@nestjs/mapped-types';
import { CreateDepartmentDto } from './';

export class UpdateDepartmentDto extends PartialType(CreateDepartmentDto) {}
