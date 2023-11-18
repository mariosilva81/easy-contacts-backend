import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateSessionDto {
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
  password!: string;
}
