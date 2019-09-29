import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { SearchRecipesComponent } from './search-recipes/search-recipes.component';

const routes: Routes = [
    { path: 'search', component: SearchRecipesComponent },
    { path: 'recipe/:uri', component: RecipeDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
