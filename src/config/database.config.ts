// src/config/database.config.ts

import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UserEntity } from '../users/entities/user.entity';

export const databaseConfig = (
  configService: ConfigService,
): TypeOrmModuleOptions => ({
  type: 'mysql',
  host: configService.getOrThrow('DB_HOST', 'localhost'),
  port: +configService.getOrThrow('DB_PORT', 3306),
  username: configService.getOrThrow('DB_USERNAME', 'root'),
  password: configService.getOrThrow('DB_PASSWORD', ''),
  database: configService.getOrThrow('DB_DATABASE', 'coba_nest'),
  entities: [UserEntity],
  migrations: ['src/migrations/*{.ts,.js}'],
  autoLoadEntities: true,
  synchronize: true,
});
