import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class ServiceNameService {
  constructor(private httpClient: HttpClient) { }
  
} 

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  BASE_URL = 'https://api.themoviedb.org/3/movie';
  API_KEY = 'api_key=5528de42f94c5601bbe96e79c3e77382';

  url = `${this.BASE_URL}/now_playing?${this.API_KEY}`;

  

  constructor(private http : HttpClient) {};

  getAllNowPlayingFilms() {
    return this.http.get(`${this.BASE_URL}/now_playing?${this.API_KEY}&region=FR`);
  }

  getNewFilms() {
    return this.http.get(`${this.BASE_URL}/upcoming?${this.API_KEY}&region=FR`)
  }

  getFilmDetails(id : number) {
    return this.http.get(`${this.BASE_URL}/${id}?${this.API_KEY}`);
  }

  getMovieTrailer(id : number) {
    return this.http.get(`${this.BASE_URL}/${id}/videos?${this.API_KEY}`);
  }

  //  https://api.themoviedb.org/3/movie/upcoming?api_key=<<api_key>>&language=en-US&page=1

}
