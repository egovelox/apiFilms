import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {
  filmDetails : any;
  countries : any;
  genres: any;
  imagePath : string = 'https://image.tmdb.org/t/p/w500'
  isFilmLoaded = false;

  //YouTUBE Player
  player: YT.Player;
  youtubeUrl = 'https://www.youtube.com/embed/';
  isTrailerLoaded = false;
  trailers : any;
/*
  savePlayer(player) {
    this.player = player;
    console.log('player instance', player);
  }
  onStateChange(event) {
    console.log('player state', event.data);
  }
*/

  constructor(private route : ActivatedRoute, private service : MoviesService) { }

  ngOnInit() {
    const filmId = this.route.snapshot.paramMap.get('id');

    this.service.getFilmDetails(+filmId)
    .subscribe((response : any) => {
      this.filmDetails = response;
      this.countries = response.production_countries;
      this.genres = response.genres;
      this.isFilmLoaded = true;
      console.log(this.filmDetails)
    })

    this.service.getMovieTrailer(+filmId)
    .subscribe((response : any) => {
      this.trailers = response.results;
      this.isTrailerLoaded = true;
    })
  }

}


/*

<iframe width="560" height="315" src="https://www.youtube.com/embed/Sj1pb4je5T8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

*/