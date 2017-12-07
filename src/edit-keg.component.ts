import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  template: `
  <div *ngIf="childSelectedKeg">
    <h3>Edit: {{childSelectedKeg.name}}</h3>
    <input [(ngModel)]="childSelectedKeg.name">
    <br>
    <input [(ngModel)]="childSelectedKeg.brand">
    <br>
    <input [(ngModel)]="childSelectedKeg.price">
    <br>
    <input [(ngModel)]="childSelectedKeg.aContent">
    <br>
    <input [(ngModel)]="childSelectedKeg.style">
    <br>
    <button (click)="doneButtonHasBeenClicked()">Done</button>
  </div>
  `
})

export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
  @Output() doneSender = new EventEmitter();

  doneButtonHasBeenClicked(){
    this.doneSender.emit();
  }
}
