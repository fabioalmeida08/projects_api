import { ApiProperty, PartialType } from '@nestjs/swagger';
import { Expose, Exclude, Transform } from 'class-transformer';
import { CreateTaskDto } from './task-create.dto';

export class TaskDto {
  @ApiProperty({ example: 'de8df8eb-58ea-4f8e-8cf4-d872819c4ec5' })
  @Expose()
  id: string;

  @ApiProperty({ example: 'try to deafeat smaug' })
  @Expose()
  descricao: string;

  @Expose()
  @ApiProperty({ example: '2023-04-12' })
  data_limite: Date;

  @ApiProperty({ example: 'EM_ANDAMENTO' })
  @Expose()
  status: string;

  @ApiProperty({ example: '4f820633-82ac-41dc-8597-74389a2191f6' })
  @Transform(({ obj }) => obj.project.id)
  @Expose()
  project_id: string;
}
