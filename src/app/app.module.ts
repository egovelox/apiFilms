import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FilmListComponent } from './composants/film-list/film-list.component';
import { FilmCardComponent } from './composants/film-card/film-card.component';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FilmDetailsComponent } from './composants/film-details/film-details.component';
import { NewfilmListComponent } from './composants/newfilm-list/newfilm-list.component';
@NgModule({
  declarations: [
    AppComponent,
    FilmListComponent,
    FilmCardComponent,
    FilmDetailsComponent,
    NewfilmListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxYoutubePlayerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);