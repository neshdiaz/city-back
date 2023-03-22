import { Controller, Get, Param } from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService){} 

  @Get('top')
  getTopMovies(): {} {
 
    return this.moviesService.getTopMovies();
  }

  @Get(':title')
  getMovieByTitle(@Param('title') title: string) {
    
    return this.moviesService.getMovieByTitle(title);
  }
}
