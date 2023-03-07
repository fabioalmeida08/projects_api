import { PartialType } from '@nestjs/swagger';
import { Expose, Exclude, Transform } from 'class-transformer';
import { CreateTaskDto } from './create-task.dto';

export class TaskDto {
  @Expose()
  id: string;

  @Expose()
  descricao: string;

  @Expose()
  data_limite: Date;

  @Expose()
  status: string;

  @Transform(({ obj }) => obj.project.id)
  @Expose()
  project_id: string;
}
