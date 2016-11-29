import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DetailsComponent } from './details/details.component';
import { MoviesComponent } from './movies/movies.component';
import {MovieDetailsComponent} from "./movies/movie.details.component";
import {NewMovieComponent} from "./movies/movie.new.component.ts";
import { GoogleComponent } from "./google/google.component";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path:'details/:id', component: DetailsComponent },
  { path:'movies', component: MoviesComponent },
  { path:'movieDetails/:id', component: MovieDetailsComponent },
  { path:'createNewMovie', component: NewMovieComponent },
  { path:'createNewMovie/:id', component: NewMovieComponent },
  { path:'google', component: GoogleComponent }


];

export const routing = RouterModule.forRoot(routes);
