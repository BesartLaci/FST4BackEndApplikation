import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'app-ingredients',
    templateUrl: './ingredients.component.html',
    styleUrls: ['./ingredients.component.css']
})
/** ingredients component*/
export class IngredientsComponent {
    /** ingredients ctor */
    public ingrediens: Ingrediens[];

    constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
        http.get('http://localhost:8733/AppServiceService/GetIngredients').subscribe(result => {
            this.ingrediens = result.json() as Ingrediens[];
        }, error => console.error(error));
    }
}

interface Ingrediens {
    ingredientID: AAGUID;
    name: string;
    price: number;
    type: string;
    unitType: string;
    available: boolean;
    description: string;
}