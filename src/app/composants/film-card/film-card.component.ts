import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.css'],
})

export class FilmCardComponent implements OnInit {

  @Input() film : any;
  @Input() title: any;
  
  imagePath : string = 'https://image.tmdb.org/t/p/w500'

  constructor() { }

  ngOnInit() {

  }

}
