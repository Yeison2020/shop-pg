import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

// Reprensention of my DB table
@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', {
    unique: true,
  })
  title: string;

  @Column('float', {
    default: 0,
  })
  price: number;

  @Column({
    type: 'text',
    nullable: true,
  })
  description: string;

  @Column('text', {
    unique: true,
  })
  slug: string;

  @Column('int', {
    default: 0,
  })
  stock: number;

  @Column({
    type: 'text',
    array: true,
  })
  sizes: string[];

  @Column('text')
  gender: string;

  // tags

  // Images

  // Before Insert to DB
  @BeforeInsert()
  checkSlugInsert() {
    if (!this.slug) {
      this.slug = this.title;
    }
    this.slug = this.slug
      .toLocaleLowerCase()
      .replaceAll("'", '')
      .replaceAll(' ', '_');
  }

  // After Insert to DB
  @BeforeUpdate()
  checkSlugUpdate() {
    this.slug = this.slug
      .toLocaleLowerCase()
      .replaceAll("'", '')
      .replaceAll(' ', '_');
  }
}
