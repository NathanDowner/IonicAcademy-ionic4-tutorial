import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  // { path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  // { path: 'people', loadChildren: './pages/people/people.module#PeoplePageModule' },
  // { path: 'planets', loadChildren: './pages/planets/planets.module#PlanetsPageModule' },
  // { path: 'films', loadChildren: './pages/films/films.module#FilmsPageModule' },
  // { path: 'film-details', loadChildren: './pages/film-details/film-details.module#FilmDetailsPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
