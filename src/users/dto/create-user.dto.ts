import {
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  MaxLength,
  MinLength,
} from 'class-validator';
import { isUnique } from '../../common/validators/unique.validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  name: string;

  @IsNotEmpty()
  @MaxLength(100)
  @isUnique({ tableName: 'users', column: 'username' })
  username: string;

  @IsNotEmpty()
  @MinLength(8)
  @IsStrongPassword()
  password: string;
}
