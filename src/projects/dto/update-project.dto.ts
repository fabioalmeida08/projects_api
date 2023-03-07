import { PartialType } from '@nestjs/swagger';
import { CreateProjectDto } from './create-project.dto';
import { IsString, IsOptional } from 'class-validator';
export class UpdateProjectDto extends PartialType(CreateProjectDto) {
  @IsOptional()
  nome: string;

  @IsOptional()
  descricao?: string;
}
