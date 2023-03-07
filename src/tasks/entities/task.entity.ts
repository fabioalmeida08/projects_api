import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

import { TasksStatusEnum } from '../dto/tasks-enum';

export class Task {
  descricao: string;

  data_limite: Date;

  status: TasksStatusEnum;
}
