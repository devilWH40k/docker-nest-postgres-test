import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('news')
export class NewsEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'varchar', length: 255 })
  title: string

  @Column({ type: 'text' })
  content: string

  @Column({ type: 'varchar', length: 255, unique: true })
  slug: string

  @Column({ type: 'varchar', nullable: true })
  imageUrl?: string

  @Column({ type: 'date' })
  publishedDate: string
}
