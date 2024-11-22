import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  HttpCode,
  UseInterceptors,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { SuccessResponse } from '../shared/responses/success.response';
import { ValidationInterceptor } from '../common/interceptors/validation.interceptor';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  findAll(): any {
    return this.userService.findAll();
  }

  @UseInterceptors(ValidationInterceptor)
  @HttpCode(HttpStatus.CREATED)
  @Post()
  create(@Body() createUserDto: CreateUserDto): any {
    const data = this.userService.create(createUserDto);
    return SuccessResponse.build(data, 'Success Create User');
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return +id;
    // return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    console.log(updateUserDto.name);
    return +id;
    // return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return +id;
    // return this.userService.remove(+id);
  }
}
