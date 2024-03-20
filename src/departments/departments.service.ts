import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Department } from './entities';
import { Repository } from 'typeorm';
import { CreateDepartmentDto, UpdateDepartmentDto } from './dto';
@Injectable()
export class DepartmentsService {
  constructor(
    @InjectRepository(Department)
    private readonly departmentsRepository: Repository<Department>,
  ) {}

  getAllDepartments() {
    return this.departmentsRepository.find();
  }

  async getDepartmentById(id: number) {
    const department = await this.departmentsRepository.findOne({
      where: {
        id: id,
      },
    });
    if (department) {
      return department;
    }
    throw new NotFoundException(`A department by the id ${id} does not exist.`);
  }

  async getDepartmentByName(name: string) {
    const department = await this.departmentsRepository.findOne({
      where: {
        name: name,
      },
    });

    if (department) {
      return department;
    }
    throw new NotFoundException(
      `A department by the name ${name} does not exist.`,
    );
  }

  async createDepartment(createDepartmentDto: CreateDepartmentDto) {
    const department = this.departmentsRepository.create(createDepartmentDto);
    if (department) {
      return this.departmentsRepository.save(department);
    }
    throw new BadRequestException();
  }

  async updateDepartment(id: number, updateDepartmentDto: UpdateDepartmentDto) {
    const department = this.getDepartmentById(id);
    if (department) {
      const updatedDepartment = {
        id: id,
        ...updateDepartmentDto,
      };
      this.departmentsRepository.save(updatedDepartment);
    }
    throw new NotFoundException(`A department by the id ${id} does not exist.`);
  }
  async deleteDepartment(id: number) {
    const department = await this.getDepartmentById(id);
    if (!department) {
      throw new HttpException(
        'Failed to delete',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    return this.departmentsRepository.remove(department);
  }
}
