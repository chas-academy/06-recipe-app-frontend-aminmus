import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetRecipesService {

  constructor(
      private http: HttpClient
  ) { }



  public getRecipes(searchTerm: string): Observable<any> {

    // Yummly API information
    const apiInfo = {
        appId: 'eed9bde0',
        appKey: '8ec48492633380399c709fec6e66a86f'
    }

    const baseUrl: string = `http://api.yummly.com/v1/api/recipes?_app_id=${apiInfo.appId}&_app_key=${apiInfo.appKey}&q=${searchTerm}`;

    return this.http.get(baseUrl);
  }
}


