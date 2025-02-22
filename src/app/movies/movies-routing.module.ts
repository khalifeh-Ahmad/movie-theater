import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './pages/movies/movies.component';
import { MovieComponent } from './pages/movie/movie.component';
import { CompanyComponent } from './pages/company/company.component';

const routes: Routes = [
  { path: 'movies', component: MoviesComponent },
  { path: 'movies/genres/:genId', component: MoviesComponent },
  { path: 'movie/:mid', component: MovieComponent },
  { path: 'company/:cid', component: CompanyComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
