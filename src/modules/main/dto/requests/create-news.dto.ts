import { IsDateString, IsOptional, IsString } from 'class-validator'

export class CreateNewsDto {
  @IsString()
  title: string

  @IsString()
  content: string

  @IsString()
  slug: string

  @IsOptional()
  @IsString()
  imageUrl?: string

  @IsDateString()
  publishedDate: string
}
