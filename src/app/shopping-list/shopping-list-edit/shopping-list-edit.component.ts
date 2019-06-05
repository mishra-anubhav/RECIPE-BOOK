import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../shopping-list/shopping.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent
 implements OnInit {
@ViewChild('nameInput',{static:false}) nameInputRef:ElementRef;
@ViewChild('amountInput',{static:false}) amountInputRef:ElementRef;
@Output()IngredientAdded =new EventEmitter<Ingredient>()
  constructor() { }

  ngOnInit() {
  }
onAddItem(){
  const ingName =this.nameInputRef.nativeElement.value;
  const ingamount=this.amountInputRef.nativeElement.value;
  const newIngredient = new Ingredient(ingName,ingamount)
}
}
