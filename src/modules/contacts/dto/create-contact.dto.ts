import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateContactDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(50)
  full_name!: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  @IsEmail()
  email!: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(11)
  @MaxLength(20)
  phone!: string;

  @IsString()
  @IsNotEmpty()
  client_id!: string;
}
