import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  // async findOne(username: string): Promise<User | undefined> {
  //   return this.users.find((user) => user.username === username);
  // }
  //
  async create(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto);
  }

  async findAll(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }
  //
  // async update(id: number, updateCategoryDto: UpdateCategoryDto) {
  //   return this.userRepository.update(id, updateCategoryDto);
  //   return `This action updates a #${id} category`;
  // }
  //
  // async remove(id: number) {
  //   return `This action removes a #${id} category`;
  // }
}
