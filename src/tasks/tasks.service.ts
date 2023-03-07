import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class TasksService {
  constructor(@InjectRepository(Task) private repo: Repository<Task>) {}
  async create(createTaskDto: CreateTaskDto) {
    const task = this.repo.create(createTaskDto);

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
