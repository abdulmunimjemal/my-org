import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Patch,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UpdateDepartmentDto } from './dto/';
import { CreateDepartmentDto } from './dto/';
import { DepartmentsService } from './departments.service';
import { JwtAuthenticationGuard } from '../authentication/guards';

@Controller('departments')
export class DepartmentsController {
  constructor(private readonly departmentsService: DepartmentsService) {}

  @Get('')
  findAll() {
    return this.departmentsService.getAllDepartments();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.departmentsService.getDepartmentById(id);
  }

  @Get(':name')
  findByName(@Param('name') name: string) {
    return this.departmentsService.getDepartmentByName(name);
  }

  @Post()
  @UseGuards(JwtAuthenticationGuard)
  create(@Body() createDepartmentDto: CreateDepartmentDto) {
    return this.departmentsService.createDepartment(createDepartmentDto);
  }

  @Patch(':id')
  @UseGuards(JwtAuthenticationGuard)
  update(
    @Param('id') id: number,
    @Body() updateDepartmentDto: UpdateDepartmentDto,
  ) {
    return this.departmentsService.updateDepartment(id, updateDepartmentDto);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.departmentsService.deleteDepartment(id);
  }
}
