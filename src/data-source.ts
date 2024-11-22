import { DataSource, DataSourceOptions } from 'typeorm';
import { databaseConfig } from './config/database.config';
import { ConfigService } from '@nestjs/config';

export default new DataSource(
  <DataSourceOptions>databaseConfig(new ConfigService()),
);
