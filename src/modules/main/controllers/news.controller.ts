import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'

import { CreateNewsDto } from 'src/modules/main/dto/requests/create-news.dto'
import { UpdateNewsDto } from 'src/modules/main/dto/requests/update-news.dto'

import { NewsEntity } from 'src/modules/main/entities/news.entity'

import { NewsService } from 'src/modules/main/services/news.service'

@ApiTags('News')
@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  // Create the news record
  @Post()
  async create(@Body() createNewsDto: CreateNewsDto): Promise<NewsEntity> {
    return await this.newsService.create(createNewsDto)
  }

  // Get all the created news
  @Get()
  async findAll(): Promise<NewsEntity[]> {
    return await this.newsService.findAll()
  }

  // Get one by slag
  @Get(':slug')
  async findOne(@Param('slug') slug: string): Promise<NewsEntity> {
    return await this.newsService.findOne(slug)
  }

  // Update by slag
  @Put(':slug')
  async update(@Param('slug') slug: string, @Body() updateNewsDto: UpdateNewsDto): Promise<NewsEntity> {
    return await this.newsService.update(slug, updateNewsDto)
  }

  // Delete by slag
  @Delete(':slug')
  async remove(@Param('slug') slug: string): Promise<void> {
    await this.newsService.remove(slug)
  }
}
