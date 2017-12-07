import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <button (click)="changeUser()">Change User</button>
  <div [class]="levelColor(currentKeg)" *ngFor="let currentKeg of allKegs">
    <h1>{{currentKeg.name}}</h1>
    <h2>{{currentKeg.brand}}</h2>
    <p [class] = "priceColor(currentKeg)">{{currentKeg.price}}</p>
    <p>{{currentKeg.aContent}}<span *ngIf="currentKeg.aContent > 6">💀</span></p>
    <p>{{currentKeg.style}}</p>
    <p>{{currentKeg.pintsLevel}}</p>
    <br>
    <div *ngIf="tapRoomEmployee === true">
      <button (click)="editKeg(currentKeg)">Edit</button>
      <br>
      <br>
      <input type="radio" [(ngModel)]="beerSize" [value]="1">Pint<br>
      <input type="radio" [(ngModel)]="beerSize" [value]="2">Growler<br>
      <input type="radio" [(ngModel)]="beerSize" [value]="4">Large Growler<br>
      <button *ngIf="currentKeg.pintsLevel > 16" (click)="sellPint(currentKeg, beerSize)">Sell</button>
      <br>
      <br>
      <button (click)="removeKeg(currentKeg)">Remove</button>
      <h2 *ngIf="currentKeg.pintsLevel === 12">Refill me please!</h2>
    </div>
  </div>

  <div class="new-form" *ngIf="tapRoomEmployee === true">
    <h3>Add Keg</h3>
    <label>Name</label>
    <input type="text" [(ngModel)]="kegName">
    <br><label>Brand</label>
    <input type="text" [(ngModel)]="kegBrand">
    <br><label>Price</label>
    <input type="text" [(ngModel)]="kegPrice">
    <br><label>Alcohol Content</label>
    <input type="text" [(ngModel)]="kegAContent">
    <br><label>Beer Style</label>
    <input type="text" [(ngModel)]="kegStyle">
    <br>
    <button (click)="addKeg(kegName,kegBrand,kegPrice,kegAContent,kegStyle)">Add</button>
  </div>

  <div *ngIf="selectedKeg">
    <h3>Edit : name</h3>
    <input [(ngModel)]="selectedKeg.name">
    <br>
    <input [(ngModel)]="selectedKeg.brand">
    <br>
    <input [(ngModel)]="selectedKeg.price">
    <br>
    <input [(ngModel)]="selectedKeg.aContent">
    <br>
    <input [(ngModel)]="selectedKeg.style">
    <br>
    <button (click)="finishEdit()">Done</button>
  </div>
  `
})

export class AppComponent {
  tapRoomEmployee: boolean = false;
  testKeg: Keg = new Keg("Half Hitch","Crux Fermentation Project",17,9.5,"Imperial IPA");
  allKegs: Keg[] = [this.testKeg];
  selectedKeg = null;

  changeUser(){
    if (this.tapRoomEmployee === false){
      this.tapRoomEmployee = true;
      console.log(this.tapRoomEmployee);
    } else {
      this.tapRoomEmployee = false;
    }
  }

  addKeg(name, brand, price, aContent, style){
    this.allKegs.push(new Keg(name, brand, price, aContent, style));
  }

  editKeg(clickedKeg){
    this.selectedKeg = clickedKeg;
  }

  finishEdit(){
    this.selectedKeg = null;
  }

  removeKeg(clickedKeg){
    let kegIndex = this.allKegs.indexOf(clickedKeg);
    if (kegIndex > -1) {
      this.allKegs.splice(kegIndex, 1); // 1 stands for number of elements to remove, not index value of an array
    }
  }

  sellPint(clickedKeg,beerSize){
    if (clickedKeg.changeLevel(beerSize) === false){
      alert("You need to refill this.");
      // change this because you might not necessarily need to refill so much as change the selling size.
    }
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

export class Keg {
  public pintsLevel: number = 124;
  constructor(public name:string, public brand:string, public price:number, public aContent:number, public style:string){}

  // the argument for the parameter 'modifier' comes from beerSize
  changeLevel(modifier){
    if(this.pintsLevel - (16*modifier) > 0) {
      this.pintsLevel -= (16*modifier);
    } else {
      return false;
    }
  }
}
