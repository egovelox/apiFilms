import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-newfilm-list',
  templateUrl: './newfilm-list.component.html',
  styleUrls: ['./newfilm-list.component.css']
})
export class NewfilmListComponent implements OnInit {


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

    this.service.getNewFilms()
    .subscribe(
      (liste : any) => {
        this.listeFilms = liste.results;
        // limit title size...
        this.listeFilms.map((film) => {
          film.title = this.limitTitle(film.title);
          if(!film.backdrop_path)
          {
            film.backdrop_path = film.poster_path;
          }
        })
        console.log(this.listeFilms);
      }, 
      (err) => {console.log(err);}
      )
  }
}
