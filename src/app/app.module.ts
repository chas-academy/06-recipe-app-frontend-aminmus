import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { GraphQLModule } from '../modules/graphql.module';
import { SearchRecipesComponent } from './search-recipes/search-recipes.component';
import { RecipesComponent } from './search-recipes/recipes/recipes.component';
import { SearchFormComponent } from './search-recipes/search-form/search-form.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeDetailsComponent,
    SearchRecipesComponent,
    RecipesComponent,
    SearchFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    GraphQLModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
