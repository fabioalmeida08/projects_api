import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/task-create.dto';
import { UpdateTaskDto } from './dto/task-update.dto';
import { Task } from './entities/task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from '../projects/entities/project.entity';
@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task) private repo: Repository<Task>,
    @InjectRepository(Project) private projectRepo: Repository<Project>,
  ) {}
  async create(createTaskDto: CreateTaskDto, projectId: string) {
    const task = this.repo.create(createTaskDto);
    const project = await this.projectRepo.findOneBy({ id: projectId });
    task.project = project;

    return await this.repo.save(task);
  }

  async findAll() {
    return await this.repo.find();
  }

  async findOne(id: string) {
    const task = await this.repo.findOneBy({ id });

    if (!task) {
      throw new BadRequestException('task with this id not found');
    }

    return task;
  }

  async update(id: string, updateTaskDto: UpdateTaskDto) {
    const task = await this.findOne(id);

    const updatedTask = {
      ...task,
      ...updateTaskDto,
    };

    return this.repo.save(updatedTask);
  }

  async remove(id: string) {
    const task = await this.findOne(id);

    this.repo.remove(task);

    return {
      statusCode: 200,
      message: 'task removed',
    };
  }
}
