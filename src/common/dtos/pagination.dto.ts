import { Type } from 'class-transformer';
import { IsOptional, IsPositive, Min } from 'class-validator';

export class PaginationDto {
  @IsOptional()
  @IsPositive()
  // TRANSFORMATION the limit value received throught the Query()
  @Type(() => Number) // This is the same as adding enableImplicitConversion: true poke API
  limit?: number;

  @Type(() => Number)
  @IsOptional()
  //   @IsPositive()
  @Min(0)
  offset?: number;
}
