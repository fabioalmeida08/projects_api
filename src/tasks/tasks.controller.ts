import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/task-create.dto';
import { UpdateTaskDto } from './dto/task-update.dto';
import { Serialize } from '../interceptors/serialize.interceptors';
import { TaskDto } from './dto/task-created-response.dto';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetTaskDto } from './dto/task-get-response.dto';
import { UpdateTaskResponseDto } from './dto/task-update-response.dto';

@ApiTags('tasks')
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Serialize(TaskDto)
  @Post(':projectId')
  @ApiBody({ type: CreateTaskDto })
  @ApiResponse({ type: TaskDto, status: 200 })
  create(
    @Body() createTaskDto: CreateTaskDto,
    @Param('projectId') projectId: string,
  ) {
    return this.tasksService.create(createTaskDto, projectId);
  }

  @Get()
  @ApiResponse({ type: GetTaskDto, status: 200, isArray: true })
  findAll() {
    return this.tasksService.findAll();
  }

  @Get(':id')
  @ApiResponse({ type: GetTaskDto, status: 200 })
  findOne(@Param('id') id: string) {
    return this.tasksService.findOne(id);
  }

  @Patch(':id')
  @ApiBody({ type: UpdateTaskDto })
  @ApiResponse({ type: UpdateTaskResponseDto, status: 200 })
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(id, updateTaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tasksService.remove(id);
  }
}
