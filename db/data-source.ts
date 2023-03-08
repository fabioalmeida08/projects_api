import { DataSource } from 'typeorm';
import { config } from 'dotenv';

config()

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: ['dist/src/**/*.entity.js'],
  migrations: ['dist/db/migrations/*.js'],
  migrationsTableName: 'migrations',
  synchronize: true,
  migrationsRun: false,
  dropSchema: false
})