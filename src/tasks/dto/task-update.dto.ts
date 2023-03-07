import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateTaskDto } from './task-create.dto';
import { IsOptional } from 'class-validator';
import { TasksStatusEnum } from '../enum/tasks-enum';
export class UpdateTaskDto extends PartialType(CreateTaskDto) {
  @IsOptional()
  @ApiProperty({ example: 'new task update', required: false })
  descricao?: string;

  @IsOptional()
  @ApiProperty({ example: '3000-12-24', required: false })
  data_limite?: Date;

  @IsOptional()
  @ApiProperty({ example: 'FEITA', required: false })
  status?: TasksStatusEnum;
}
