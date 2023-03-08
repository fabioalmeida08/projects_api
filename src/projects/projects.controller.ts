import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/project-create.dto';
import { UpdateProjectDto } from './dto/project-update.dto';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ProjectResponseDto } from './dto/project-response.dto';
import { GetProjectDto } from './dto/project-get.dto';
import { UpdateProjectResponseDto } from './dto/project-update-response.dto';

@ApiTags('projects')
@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @ApiCreatedResponse({ type: ProjectResponseDto })
  @ApiBody({ type: CreateProjectDto })
  @Post()
  create(@Body() createProjectDto: CreateProjectDto) {
    return this.projectsService.create(createProjectDto);
  }

  @Get()
  @ApiResponse({ type: GetProjectDto, isArray: true, status: 200 })
  findAll() {
    return this.projectsService.findAll();
  }

  @Get(':id')
  @ApiResponse({ type: GetProjectDto, status: 200 })
  findOne(@Param('id') id: string) {
    return this.projectsService.findOne(id);
  }

  @Patch(':id')
  @ApiBody({ type: UpdateProjectDto })
  @ApiResponse({ type: UpdateProjectResponseDto, status: 200 })
  update(@Param('id') id: string, @Body() updateProjectDto: UpdateProjectDto) {
    return this.projectsService.update(id, updateProjectDto);
  }

  @Delete(':id')
  @HttpCode(204)
  @ApiResponse({ status: 204 })
  remove(@Param('id') id: string) {
    return this.projectsService.remove(id);
  }
}
