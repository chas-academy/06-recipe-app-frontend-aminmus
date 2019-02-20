import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetRecipesService {

  constructor() { }



  getRecipes(): void {
    // Make api url here

    // Yummly API information
    const apiInfo: object = {
        appId: 'eed9bde0',
        appKey: '8ec48492633380399c709fec6e66a86f'
    }
    // TODO: use baseUrl to create custom searches with user input
    // const baseUrl: string = http://api.yummly.com/v1/api/recipes?_app_id=app-id&_app_key=app-key&your _search_parameters
  }
  
}


