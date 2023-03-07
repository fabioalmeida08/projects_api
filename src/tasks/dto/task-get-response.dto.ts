import { ApiProperty } from '@nestjs/swagger';
import { CreateTaskDto } from './task-create.dto';

export class GetTaskDto extends CreateTaskDto {
  @ApiProperty({ example: 'de8df8eb-58ea-4f8e-8cf4-d872819c4ec5' })
  id: string;
}
