import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { CreateNewsDto } from 'src/modules/main/dto/requests/create-news.dto'
import { UpdateNewsDto } from 'src/modules/main/dto/requests/update-news.dto'

import { NewsEntity } from 'src/modules/main/entities/news.entity'

@Injectable()
export class NewsService {
  constructor(
    @InjectRepository(NewsEntity)
    private readonly newsRepository: Repository<NewsEntity>,
  ) {}

  // CREATE
  async create(createNewsDto: CreateNewsDto): Promise<NewsEntity> {
    const news = this.newsRepository.create(createNewsDto)

    return await this.newsRepository.save(news)
  }

  // READ (all news articles)
  async findAll(): Promise<NewsEntity[]> {
    return await this.newsRepository.find()
  }

  // READ (one news article by slug)
  async findOne(slug: string): Promise<NewsEntity> {
    try {
      return await this.newsRepository.findOneOrFail({ where: { slug } })
    } catch (error) {
      throw new NotFoundException(`News article with slug ${slug} not found`)
    }
  }

  // UPDATE
  async update(slug: string, updateNewsDto: UpdateNewsDto): Promise<NewsEntity> {
    const news = await this.findOne(slug)

    Object.assign(news, updateNewsDto)

    return await this.newsRepository.save(news)
  }

  // DELETE
  async remove(slug: string): Promise<void> {
    const news = await this.findOne(slug)

    await this.newsRepository.remove(news)
  }
}
