import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmListComponent } from './composants/film-list/film-list.component';
import { FilmDetailsComponent } from './composants/film-details/film-details.component';
import { NewfilmListComponent } from './composants/newfilm-list/newfilm-list.component';


const routes: Routes = [
  {path: '', redirectTo : '/films', pathMatch: 'full'},
  {path: 'films', component: FilmListComponent},
  {path: 'newfilms', component: NewfilmListComponent},
  {path: 'films/:id', component: FilmDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
