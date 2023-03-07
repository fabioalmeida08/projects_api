import { IsNotEmpty, IsString, IsEnum, IsDate } from 'class-validator';
import { TasksStatusEnum } from './tasks-enum';
export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  descricao: string;

  @IsDate()
  data_limite: Date;

  @IsEnum(TasksStatusEnum)
  @IsNotEmpty()
  status: TasksStatusEnum;
}
