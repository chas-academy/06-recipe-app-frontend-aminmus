import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';

const routes: Routes = [
    // { path: '**', component: AppComponent},
    { path:'', component: RecipesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
