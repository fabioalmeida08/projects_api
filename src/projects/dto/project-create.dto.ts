import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateProjectDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 'Mordor Project',
    description: 'project name',
  })
  nome: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 'the jouney to destroy the ring',
    description: 'simple description about the project',
  })
  descricao: string;
}
