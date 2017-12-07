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
