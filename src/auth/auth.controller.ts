import { Controller, Get, Post, Redirect } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService){}

  @Get('getRequestToken')
  getTopMovies(): {} {
    return this.authService.getRequestToken();
  }

  @Post('createSession')
  createSession(): {} {
 
    return this.authService.createSession();
  }

  @Post('createList')
  createList(): {} {
 
    return 0
  }
}
