import { Pipe, PipeTransform } from '@angular/core';
import { Player } from './player.model';

@Pipe({
  name: 'team',
  pure: false
})

export class TeamPipe implements PipeTransform {
  transform(input: Player[], condition: string) {
   var output: Player[] = [];
   console.log(condition);
   if (condition === "allTeams") {
     return input;
   }
   else {
     for (var i = 0; i < input.length; i++) {
       if (input[i].team === condition) {
         output.push(input[i]);
       }
     }
     return output;
   }
  }
}
