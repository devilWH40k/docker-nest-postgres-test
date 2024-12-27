import { Module } from '@nestjs/common'
import { ScheduleModule } from '@nestjs/schedule'
import { TypeOrmModule } from '@nestjs/typeorm'

import { NewsController } from './controllers/news.controller'
import { NewsEntity } from './entities/news.entity'
import { NewsService } from './services/news.service'

import { ProjectEntity } from 'src/modules/main/entities/project.entity'

import { AppController } from 'src/modules/main/controllers/app.controller'
import { ProjectController } from 'src/modules/main/controllers/project.controller'

import { ProjectService } from 'src/modules/main/services/project.service'

import { ProjectDataMapper } from 'src/modules/main/data-mappers/project.data-mapper'

@Module({
  imports: [
    TypeOrmModule.forFeature([NewsEntity]),
    TypeOrmModule.forFeature([ProjectEntity]),
    ScheduleModule.forRoot(),
  ],
  controllers: [AppController, ProjectController, NewsController],
  providers: [ProjectService, ProjectDataMapper, NewsService],
})
export class MainModule {}
