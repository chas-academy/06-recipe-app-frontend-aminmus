import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { SearchRecipesComponent } from './search-recipes/search-recipes.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { RecipeListsComponent } from './recipe-lists/recipe-lists.component';

const routes: Routes = [
  { path: 'search', component: SearchRecipesComponent },
  { path: 'recipe/:uri', component: RecipeDetailsComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: RecipeListsComponent, canActivate: [AuthGuard]  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
