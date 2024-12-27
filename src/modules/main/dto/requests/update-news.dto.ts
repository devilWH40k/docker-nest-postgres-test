import { IsDateString, IsOptional, IsString } from 'class-validator'

export class UpdateNewsDto {
  @IsOptional()
  @IsString()
  title?: string

  @IsOptional()
  @IsString()
  content?: string

  @IsOptional()
  @IsString()
  slug?: string

  @IsOptional()
  @IsString()
  imageUrl?: string

  @IsOptional()
  @IsDateString()
  publishedDate?: string
}
