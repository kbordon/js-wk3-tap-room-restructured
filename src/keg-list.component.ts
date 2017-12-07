import {Component} from '@angular/core';

@Component({
  selector: 'keg-list',
  template:`
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
  `
})

export class KegListComponent {

}
