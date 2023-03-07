import { IsNotEmpty, IsString, IsEnum, IsDateString } from 'class-validator';
import { TasksStatusEnum } from '../enum/tasks-enum';
import { ApiProperty } from '@nestjs/swagger';
export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'try to defeat smaug' })
  descricao: string;

  @ApiProperty({ example: '2023-04-12' })
  @IsDateString()
  data_limite: Date;

  @ApiProperty({ example: 'EM_ANDAMENTO' })
  @IsEnum(TasksStatusEnum)
  @IsNotEmpty()
  status: TasksStatusEnum;
}
