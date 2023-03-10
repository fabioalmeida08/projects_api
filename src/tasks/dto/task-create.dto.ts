import {
  IsNotEmpty,
  IsString,
  IsEnum,
  IsDateString,
  IsOptional,
} from 'class-validator';
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

  @ApiProperty({
    example: 'EM_ANDAMENTO',
    description: "Values must be 'EM_ANDAMENTO' OR 'ABERTA' OR 'FEITA'",
  })
  @IsEnum(TasksStatusEnum)
  @IsNotEmpty()
  @IsOptional()
  status: TasksStatusEnum;
}
