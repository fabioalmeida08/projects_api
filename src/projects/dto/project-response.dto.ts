import { ApiProperty } from '@nestjs/swagger';
import { ProjectDto } from './project-body.dto';

export class ProjectResponseDto extends ProjectDto {
  @ApiProperty({ example: '9af8d658-9391-4cd1-a9a3-149e33b384b6' })
  id: string;
}
