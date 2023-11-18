import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateContactDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(50)
  full_name!: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  @IsEmail()
  email!: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MinLength(11)
  @MaxLength(20)
  phone!: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  client_id!: string;
}
