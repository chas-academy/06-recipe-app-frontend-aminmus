import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class GetRecipesService {

    constructor(
        private http: HttpClient
    ) { }

    readonly apiInfo: any = {
        appId: 'eed9bde0',
        appKey: '8ec48492633380399c709fec6e66a86f'
    }

    public chosenRecipe: Object;

    public getRecipes(searchTerm: string): Observable<any> {
        const baseUrl: string = `http://api.yummly.com/v1/api/recipes?_app_id=${this.apiInfo.appId}&_app_key=${this.apiInfo.appKey}&q=${searchTerm}`;

        return this.http.get(baseUrl);
    }

    public getRecipe(recipeId: string): Observable<any> {
        const url: string = `http://api.yummly.com/v1/api${recipeId}?_app_id=${this.apiInfo.appId}&_app_key=${this.apiInfo.appKey}`;

        return this.http.get(url);
    }
}


