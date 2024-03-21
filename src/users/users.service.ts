import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities';
import { CreateUserDto, UpdateUserDto } from './dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createUser(createUserDto: CreateUserDto) {
    const user = this.userRepository.create(createUserDto);
    return await this.userRepository.save(user);
  }

  async getUserById(id: number) {
    const user = await this.userRepository.findOne({
      where: { id: id },
    });
    if (user) {
      return user;
    }
    throw new NotFoundException(`A user by the id ${id} does not exist.`);
  }

  async getUserByEmail(email: string) {
    const user = await this.userRepository.findOne({ where: { email: email } });
    if (user) {
      return user;
    }
    throw new NotFoundException(`A user by the email ${email} does not exist.`);
  }

  async updateUser(id: number, updateUserDto: UpdateUserDto) {
    const existingUser = await this.userRepository.findOneOrFail({
      where: { id },
    });
    Object.assign(existingUser, updateUserDto);
    return await this.userRepository.save(updateUserDto);
  }

  async deleteUserById(id: number): Promise<void> {
    const existingUser = await this.userRepository.findOneOrFail({
      where: { id },
    });
    await this.userRepository.delete(existingUser);
  }

  async deleteUserByEmail(email: string): Promise<void> {
    const userToDelete = await this.userRepository.findOne({
      where: { email },
    });
    if (!userToDelete) {
      throw new NotFoundException(
        `A user with the email ${email} does not exist.`,
      );
    }
    await this.userRepository.delete(userToDelete);
  }
}
