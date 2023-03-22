import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MoviesService {
  constructor(
    private configService: ConfigService,
  ) {}

  async getTopMovies(): Promise<{}> {
    let tmdb_key_v3 = this.configService.get('TMDB_API_KEY_V3');
    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${tmdb_key_v3}&page=1`);
    
    return await res.json(); 
  }
    
  async getMovieByTitle(title: string): Promise<{}> {
    let tmdb_key_v3 = this.configService.get('TMDB_API_KEY_V3');
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${tmdb_key_v3}&query=${title}&page=1`);
    
    return await res.json();
  }
}
