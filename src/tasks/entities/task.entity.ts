import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Project } from '../../projects/entities/project.entity';

import { TasksStatusEnum } from '../enum/tasks-enum';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  descricao: string;

  @Column()
  data_limite: Date;

  @Column({ default: 'ABERTA' })
  status: TasksStatusEnum;

  @ManyToOne((_type) => Project, (project) => project.tasks, {
    onDelete: 'CASCADE',
  })
  project: Project;
}
