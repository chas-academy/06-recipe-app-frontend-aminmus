import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
// import { RecipesComponent } from './recipes/recipes.component';
// import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { SearchRecipesComponent } from './search-recipes/search-recipes.component';

const routes: Routes = [
    // { path: '**', component: AppComponent},
    { path: '', component: SearchRecipesComponent },
    // { path: 'recipe/:id', component: RecipeDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
