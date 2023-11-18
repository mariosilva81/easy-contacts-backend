import { Controller, Post, Body } from '@nestjs/common';
import { SessionService } from './session.service';
import { CreateSessionDto } from './dto/create-session.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('login')
@Controller('session')
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}

  @Post('login')
  create(@Body() createSessionDto: CreateSessionDto) {
    return this.sessionService.create(createSessionDto);
  }
}
