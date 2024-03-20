import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';

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
  create(@Body() bodyDto) {
    return 'Added Department';
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updagteDepartmentDto) {
    return 'Update Dept';
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return 'Delete dept';
  }
}
