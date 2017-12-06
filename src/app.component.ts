import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div *ngFor="let currentKeg of allKegs">
    <h1>{{currentKeg.name}}</h1>
    <h2>{{currentKeg.brand}}</h2>
    <p>{{currentKeg.price}}</p>
    <p>{{currentKeg.aContent}}</p>
    <p>{{currentKeg.style}}</p>
    <p>{{currentKeg.pintsLevel}}</p>
  </div>

  <div class="new-form">
    <h3>Add Keg</h3>
    <label>Name</label>
    <br>
    <input type="text" [(ngModel)]="kegName">
    <br>
    <input type="text" [(ngModel)]="kegBrand">
    <br>
    <input type="text" [(ngModel)]="kegPrice">
    <br>
    <input type="text" [(ngModel)]="kegAContent">
    <br>
    <input type="text" [(ngModel)]="kegStyle">
    <br>
    <button (click)="addKeg(kegName,kegBrand,kegPrice,kegAContent,kegStyle)">Add</button>
  </div>



  `
})

export class AppComponent {
  testKeg: Keg = new Keg("Half Hitch","Crux Fermentation Project",17,9.5,"Imperial IPA");
  allKegs: Keg[] = [this.testKeg];


  // displayTwo(testKeg){
  //   return `${testKeg.name} ${testKeg.price}`;
  // }
  // Component logic
  addKeg(name, brand, price, aContent, style){
    this.allKegs.push(new Keg(name, brand, price, aContent, style));
  }

}

export class Keg {
  public pintsLevel: number = 124;
  constructor(public name:string, public brand:string, public price:number, public aContent:number, public style:string){}
}
