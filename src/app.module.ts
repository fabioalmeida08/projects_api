import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppDataSource } from '../db/data-source';
import { ProjectsModule } from './projects/projects.module';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [TypeOrmModule.forRoot(AppDataSource.options), ProjectsModule, TasksModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
