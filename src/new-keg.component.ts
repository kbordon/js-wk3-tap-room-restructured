import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Keg} from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
  <div class="new-form" *ngIf="childTapRoomEmployee === true">
    <h3>Add Keg</h3>
    <label>Name</label>
    <input type="text" #kegName>
    <br><label>Brand</label>
    <input type="text" #kegBrand>
    <br><label>Price</label>
    <input type="text" #kegPrice>
    <br><label>Alcohol Content</label>
    <input type="text" #kegAContent>
    <br><label>Beer Style</label>
    <input type="text" #kegStyle>
    <br>
    <button (click)="submitForm(kegName.value, kegBrand.value, kegPrice.value, kegAContent.value, kegStyle.value); kegName.value=''; kegBrand.value=''; kegPrice.value=''; kegAContent.value=''; kegStyle.value='';">Add</button>
  </div>
  `
})

export class NewKegComponent {
  @Input() childTapRoomEmployee: boolean;
  @Output() newKegSender = new EventEmitter();

  submitForm(name: string, brand: string, price: number, aContent: number, style: string) {
    console.log(name);
    let newKegToAdd: Keg = new Keg(name, brand, price, aContent, style);
    this.newKegSender.emit(newKegToAdd);
  }
}
