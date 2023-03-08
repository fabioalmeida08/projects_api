import { ApiProperty } from '@nestjs/swagger';
import { UpdateProjectDto } from './project-update.dto';

export class UpdateProjectResponseDto extends UpdateProjectDto {
  @ApiProperty({ example: 'de8df8eb-58ea-4f8e-8cf4-d872819c4ec5' })
  id: string;
}
