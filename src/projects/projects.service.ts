import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from './entities/project.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProjectsService {
  constructor(@InjectRepository(Project) private repo: Repository<Project>) {}

  async create(createProjectDto: CreateProjectDto) {
    const project = this.repo.create(createProjectDto);
    return await this.repo.save(project);
  }

  async findAll() {
    return await this.repo.find();
  }

  async findOne(id: string) {
    const project = await this.repo.findOneBy({ id });

    if (!project) {
      throw new BadRequestException('project with this id not found');
    }

    return project;
  }

  async update(id: string, updateProjectDto: UpdateProjectDto) {
    return `This action updates a #${id} project`;
  }

  async remove(id: string) {
    return `This action removes a #${id} project`;
  }
}
