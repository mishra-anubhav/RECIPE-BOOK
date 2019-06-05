import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';
import { Recipe} from '../recipe.model';
import { NgModuleResolver } from '@angular/compiler';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 @Output()  recipewasselected =new EventEmitter<Recipe>();
recipes:Recipe[] =[
  new Recipe('A Test Recipe', 'this is simply a test','https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
  new Recipe('A Test Recipe', 'this is simply a test','https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
  new Recipe('A Test Recipe', 'this is simply a test','https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg')
];
onrecipeselected(recipe:Recipe){
this.recipewasselected.emit(recipe)
}
  constructor() { }

  ngOnInit() {
  }

}
