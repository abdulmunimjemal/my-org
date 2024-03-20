import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';
import { UpdateDepartmentDto } from './dto/';
import { CreateDepartmentDto } from './dto/';

@Controller('departments')
export class DepartmentsController {
  @Get('')
  findAll() {
    return 'ALL';
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return 'by id';
  }

  @Get(':name')
  findByName(@Param('name') name: string) {
    return 'by name';
  }

  @Post()
  create(@Body() createDepartmentDto: CreateDepartmentDto) {
    return 'Added Department';
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateDepartmentDto: UpdateDepartmentDto,
  ) {
    return 'Update Dept';
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return 'Delete dept';
  }
}
