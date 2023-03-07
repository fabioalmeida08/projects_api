import { PartialType } from '@nestjs/swagger';
import { CreateProjectDto } from './project-create.dto';
import { IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class UpdateProjectDto extends PartialType(CreateProjectDto) {
  @IsOptional()
  @ApiProperty({ required: false, example: 'updated project name' })
  nome: string;

  @IsOptional()
  @ApiProperty({ required: false, example: 'updated project description' })
  descricao?: string;
}
