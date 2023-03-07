import { ApiProperty } from '@nestjs/swagger';
export class ProjectDto {
  @ApiProperty({
    example: 'Mordor Project',
    description: 'project name', 
  })
  nome: string;

  @ApiProperty({
    example: 'the jouney to destroy the ring',
    description: 'simple description about the project',
  })
  descricao: string;
}
