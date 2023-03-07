import { BadRequestException, Injectable } from '@nestjs/common';
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
      throw new BadRequestException('task with this id not found')
    }

    return task;
  }

  update(id: string, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: string) {
    return `This action removes a #${id} task`;
  }
}
