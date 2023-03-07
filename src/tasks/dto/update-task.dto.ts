import { PartialType } from '@nestjs/swagger';
import { CreateTaskDto } from './create-task.dto';
import { IsOptional } from 'class-validator';
import { TasksStatusEnum } from './tasks-enum';
export class UpdateTaskDto extends PartialType(CreateTaskDto) {
  @IsOptional()
  descricao?: string;

  @IsOptional()
  data_limite?: Date;

  @IsOptional()
  status?: TasksStatusEnum;
}
