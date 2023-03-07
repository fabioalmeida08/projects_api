import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

import { TasksStatusEnum } from '../dto/tasks-enum';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  descricao: string;

  @Column()
  data_limite: Date;

  @Column()
  status: TasksStatusEnum;
}
