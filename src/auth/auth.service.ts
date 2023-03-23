import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private configService: ConfigService,
  ) {}

  async getRequestToken(): Promise<{}> {
    let tmdb_key_v3 = this.configService.get('TMDB_API_KEY_V3');
    const res = await fetch(`https://api.themoviedb.org/3/authentication/token/new?api_key=${tmdb_key_v3}`);
    
    return await res.json(); 
  }
    
  async createSession(): Promise<{}> {
    const token: {} =  await this.getRequestToken()
    console.log(token)

    return token
  }


}
