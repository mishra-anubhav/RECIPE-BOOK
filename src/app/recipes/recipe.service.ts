import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { EventEmitter } from 'events';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSeleected = new EventEmitter<Recipe>()

  private recipes:Recipe[] =[
    new Recipe('A Test Recipe', 'this is simply a test','https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
    new Recipe('A Test Recipe', 'this is simply a test','https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
    new Recipe('A Test Recipe', 'this is simply a test','https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg')
  ];
  getRecipes(){
    return this.recipes.slice();
  }
  constructor() { }
}
