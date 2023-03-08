import { ApiProperty } from '@nestjs/swagger';
import { ProjectResponseDto } from './project-response.dto';
export class GetProjectDto extends ProjectResponseDto {
  @ApiProperty({ example: `[]`, description: 'array of tasks' })
  tasks: [];
}
