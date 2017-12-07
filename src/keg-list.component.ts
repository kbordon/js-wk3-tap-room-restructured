import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Keg} from './keg.model';

@Component({
  selector: 'keg-list',
  template:`
  <select (change)="onChange($event.target.value)">
    <option value="All Beers">All Beers</option>
    <option value="Imperial IPA">Imperial IPA</option>
    <option value="Stout">Stout</option>
    <option value="Pilsner">Pilsner</option>
  </select>
  <button (click)="changeUserButtonHasBeenClicked()">Change User</button>
  <div [class]="levelColor(currentKeg)" *ngFor="let currentKeg of childKegList | style:filterByStyle">
    <h1>{{currentKeg.name}}</h1>
    <h2>{{currentKeg.brand}}</h2>
    <p [class] = "priceColor(currentKeg)">{{currentKeg.price}}</p>
    <p>{{currentKeg.aContent}}<span *ngIf="currentKeg.aContent > 6">💀</span></p>
    <p>{{currentKeg.style}}</p>
    <p>{{currentKeg.pintsLevel}}</p>
    <br>
    <div *ngIf="childTaproomEmployee === true">
      <button (click)="editButtonHasBeenClicked(currentKeg)">Edit</button>
      <br>
      <br>
      <input type="radio" (change)="beerSize = 1" [name]="currentKeg.name">Pint<br>
      <input type="radio" (change)="beerSize = 2" [name]="currentKeg.name">Growler<br>
      <input type="radio" (change)="beerSize = 4" [name]="currentKeg.name">Large Growler<br>
      <button *ngIf="currentKeg.pintsLevel > 16" (click)="sellButtonHasBeenClicked(currentKeg, beerSize)">Sell</button>
      <br>
      <br>
      <button (click)="removeKegButtonHasBeenClicked(currentKeg)">Remove</button>
      <h2 *ngIf="currentKeg.pintsLevel === 12">Refill me please!</h2>
    </div>
  </div>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Input() childTaproomEmployee: boolean;
  @Output() editSender = new EventEmitter();
  @Output() userSender = new EventEmitter();
  @Output() removeSender = new EventEmitter();
  @Output() sellSender = new EventEmitter();

  filterByStyle: string = "All Beers";


  setBeerSize(size: number){
    console.log(size);
  }
  onChange(optionFromMenu){
    this.filterByStyle = optionFromMenu;
  }

  changeUserButtonHasBeenClicked(){
    this.userSender.emit();
  }
  editButtonHasBeenClicked(kegToEdit: Keg){
    this.editSender.emit(kegToEdit);
  }
  removeKegButtonHasBeenClicked(kegToRemove: Keg){
    this.removeSender.emit(kegToRemove);
  }

  sellButtonHasBeenClicked(currentKeg, beerSize) {
    let sellKegDetails: { soldKeg : Keg, soldSize: number} = { soldKeg : currentKeg, soldSize: beerSize};
    this.sellSender.emit(sellKegDetails);
  }

  levelColor(currentKeg){
    if (currentKeg.pintsLevel < 20) {
      return "low";
    }
  }

  priceColor(currentKeg){
    if (currentKeg.price > 10){
      return "over-ten";
    } else if (currentKeg.price <= 10 && currentKeg.price >= 6) {
      return "six-to-ten";
    } else {
      return "under-six";
    }
  }
}
