import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
import { validate as IsUUID } from 'uuid';
import { isUUID } from 'class-validator';

@Injectable()
export class ProductsService {
  private readonly logger = new Logger('ProductsService');
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    try {
      const product = this.productRepository.create(createProductDto);
      await this.productRepository.save(product);
      return product;
    } catch (error) {
      this.handleDBException(error);
    }
  }

  //TODO: Paginated return
  async findAll(pagination: PaginationDto) {
    const { limit = 10, offset = 0 } = pagination;
    return this.productRepository.find({
      take: limit,
      skip: offset,
      // TODO Relations
    });
  }

  async findOne(term: string) {
    let product: Product;
    if (isUUID(term)) {
      product = await this.productRepository.findOneBy({ id: term });
    } else {
      // This help prevents SQL injections and allows to fetch using both slug and title
      const queryBuilder = this.productRepository.createQueryBuilder();

      product = await queryBuilder
        .where(`UPPER(title) =:title or slug =:slug`, {
          title: term.toUpperCase(),
          slug: term.toLocaleLowerCase(),
        })
        .getOne();
    }

    // const product = await this.productRepository.findOneBy({ id });
    if (!product)
      throw new NotFoundException(`Product with ID ${term} not found`);

    return product;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  async remove(id: string) {
    // Using this to target my method findOne available above
    const product = await this.findOne(id);
    await this.productRepository.remove(product);
  }

  // Private methods
  private handleDBException(error: any) {
    console.log(error);
    if (error.code === `23505`) {
      throw new BadRequestException(error.detail);
    }
    this.logger.error(error);
    throw new InternalServerErrorException(
      `Unexpected error check server logs: ${error.colums} and ${error.dataType}`,
    );
  }
}
