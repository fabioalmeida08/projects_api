import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppDataSource } from '../db/data-source';

@Module({
  imports: [TypeOrmModule.forRoot(AppDataSource.options)],
  controllers: [],
  providers: [],
})
export class AppModule {}
