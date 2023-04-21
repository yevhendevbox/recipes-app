import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingrediant.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() newIngredient = new EventEmitter<Ingredient>();

  addIngridient() {
    const currentIngrediant = new Ingredient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value);
    this.newIngredient.emit(currentIngrediant);
  }
  deleteIngredient() { }
  clearIngredientForm() {
    this.nameInputRef.nativeElement.value = '';
    this.amountInputRef.nativeElement.value = 0;
  }
}
