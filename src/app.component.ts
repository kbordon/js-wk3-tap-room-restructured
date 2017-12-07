import {Component} from '@angular/core';
import {Keg} from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <keg-list [childKegList]="masterKegList" (editSender)="editKeg($event)" [childTaproomEmployee]="tapRoomEmployee" (userSender)="changeUser()" (removeSender)="removeKeg($event)"></keg-list>
  <new-keg [childTapRoomEmployee]="tapRoomEmployee" (newKegSender)="addKeg($event)"></new-keg>
  <edit-keg [childSelectedKeg]="selectedKeg" (doneSender)="finishEdit()"></edit-keg>
  `
})

export class AppComponent {
  tapRoomEmployee: boolean = false;
  testKeg: Keg = new Keg("Half Hitch","Crux Fermentation Project",17,9.5,"Imperial IPA");
  testKeg2: Keg = new Keg("Quarter Hitch","Crix Fermentation Project",2.50,0.01,"Mystery Water");
  masterKegList: Keg[] = [this.testKeg, this.testKeg2];
  selectedKeg = null;

  changeUser(){
    if (this.tapRoomEmployee === false){
      this.tapRoomEmployee = true;
      console.log(this.tapRoomEmployee);
    } else {
      this.tapRoomEmployee = false;
    }
  }

  addKeg(newKegFromChild: Keg){
    this.masterKegList.push(newKegFromChild);
  }
  editKeg(clickedKeg){
    this.selectedKeg = clickedKeg;
  }
  finishEdit(){
    this.selectedKeg = null;
  }

  removeKeg(clickedKeg){
    let kegIndex = this.masterKegList.indexOf(clickedKeg);
    if (kegIndex > -1) {
      this.masterKegList.splice(kegIndex, 1); // 1 stands for number of elements to remove, not index value of an array
    }
  }

  sellPint(clickedKeg,beerSize){
    if (clickedKeg.changeLevel(beerSize) === false){
      alert("You need to refill this.");
      // change this because you might not necessarily need to refill so much as change the selling size.
    }
  }

}
