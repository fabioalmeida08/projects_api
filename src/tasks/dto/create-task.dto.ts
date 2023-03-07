import { IsNotEmpty, IsString, IsEnum, IsDateString } from 'class-validator';
import { TasksStatusEnum } from './tasks-enum';
export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  descricao: string;

  @IsDateString()
  data_limite: Date;

  @IsEnum(TasksStatusEnum)
  @IsNotEmpty()
  status: TasksStatusEnum;
}
