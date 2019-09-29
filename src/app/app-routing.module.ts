import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { SearchRecipesComponent } from './search-recipes/search-recipes.component';

const routes: Routes = [
    // { path: '**', component: AppComponent},
    { path: '', component: SearchRecipesComponent },
    // { path: 'recipe/:id', component: RecipeDetailsComponent }
    { path: 'reciped', component: RecipeDetailsComponent } // temporary dev route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
