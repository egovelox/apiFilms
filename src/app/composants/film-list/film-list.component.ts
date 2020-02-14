import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {

  listeFilms : any;

  constructor(private service : MoviesService) { }

  // use for limiting title size;
  limitTitle(t:string)
  {
    if(t.length > 20)
          {
            return t.substring(0,17) + '...';

          }
          else
          {
            return t;
          }
  }

  ngOnInit() {

    this.service.getAllNowPlayingFilms()
    .subscribe(
      (liste : any) => {
        this.listeFilms = liste.results;
        // limit title size...
        this.listeFilms.map((film) => {
          film.title = this.limitTitle(film.title);
        })
        console.log(this.listeFilms);
      }, 
      (err) => {console.log(err);}
      )
  }
}

