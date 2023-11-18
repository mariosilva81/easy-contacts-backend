import { ApiProperty } from '@nestjs/swagger';
import { hashSync } from 'bcryptjs';
import { Transform } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateClientDto {
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
  @MinLength(8)
  @IsNotEmpty()
  @Matches(/^(?=.*[a-z])/, {
    message: 'Password must contain at least one lowercase letter.',
  })
  @Matches(/^(?=.*[A-Z])/, {
    message: 'Password must contain at least one uppercase letter.',
  })
  @Matches(/^(?=.*\d)/, {
    message: 'Password must contain at least one number.',
  })
  @Matches(/^(?=.*[!@#$%^&*()_+])/, {
    message: 'Password must contain at least one special character.',
  })
  @Transform(({ value }: { value: string }) => hashSync(value), {
    groups: ['transform'],
  })
  password!: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MinLength(11)
  @MaxLength(20)
  phone!: string;
}
