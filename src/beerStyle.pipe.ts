import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './keg.model';

@Pipe({
  name: "style",
  pure: false
})

export class BeerStylePipe implements PipeTransform {
  transform(input: Keg[], desiredStyle){
    let output: Keg[] = [];

    if (desiredStyle === "All Beers"){
      return input;
    } else {
      for ( let i = 0; i < input.length; i++){
        if (input[i].style === desiredStyle) {
          output.push(input[i]);
        }
      }
      return output;
    }

  }
}
