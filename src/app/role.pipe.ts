import { Pipe, PipeTransform } from '@angular/core';
import { Player } from './player.model';

@Pipe({
  name: 'role',
  pure: false
})

export class RolePipe implements PipeTransform {
  transform(input: Player[], condition: string) {
   var output: Player[] = [];
   if (condition === "allRoles") {
     return input;
   }
   else {
     for (var i = 0; i < input.length; i++) {
       if (input[i].role === condition) {
         output.push(input[i]);
       }
     }
     return output;
   }
  }
}
