import { ApiProperty } from '@nestjs/swagger';
import { CreateProjectDto } from './project-create.dto';

export class ProjectResponseDto extends CreateProjectDto {
  @ApiProperty({ example: '9af8d658-9391-4cd1-a9a3-149e33b384b6' })
  id: string;
}
