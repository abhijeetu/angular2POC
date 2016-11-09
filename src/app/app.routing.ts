import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DetailsComponent } from './details/details.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path:'details/:id', component: DetailsComponent },
  { path:'movies', component: MoviesComponent }

];

export const routing = RouterModule.forRoot(routes);
