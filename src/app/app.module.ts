import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { RecipesComponent } from './recipes/recipes.component';
// import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { GraphQLModule } from './graphql.module';
import { SearchRecipesComponent } from './search-recipes/search-recipes.component';

@NgModule({
  declarations: [
    AppComponent,
    // RecipesComponent,
    // RecipeDetailsComponent,
    SearchRecipesComponent
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
