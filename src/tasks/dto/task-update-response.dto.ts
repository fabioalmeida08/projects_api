import { ApiProperty } from '@nestjs/swagger';
import { UpdateTaskDto } from './task-update.dto';

export class UpdateTaskResponseDto extends UpdateTaskDto {
  @ApiProperty({ example: 'de8df8eb-58ea-4f8e-8cf4-d872819c4ec5' })
  id: string;
}
