import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';
import { MoviesModule } from './movies/movies.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ConfigModule.forRoot(
    {isGlobal: true,}
  ), MoviesModule, AuthModule],
  controllers: [AppController, MoviesController, AuthController],
  providers: [AppService, MoviesService, AuthService],
})
export class AppModule {}
