import { Pipe, PipeTransform } from '@angular/core';
import { Player } from './player.model';

@Pipe({
  name: 'role',
  pure: false
})

export class RolePipe implements PipeTransform {

  transform(input: Player[], condition) {
   var output: Player[] = [];
   if (input != null){
     switch(condition){
       case "captain":
         return input.filter(function(player){
           return player.role === "captain";
         });
       case "bowler":
         return input.filter(function(player){
           return player.role === "bowler";
         });
       case "batsman":
         return input.filter(function(player){
           return player.role === "batsman";
         });
       case "fielder":
         return input.filter(function(player){
           return player.role === "fielder";
         });
        case "wicket-keeper":
           return input.filter(function(player){
             return player.role === "wicket-keeper";
           });
        case "umpire":
             return input.filter(function(player){
               return player.role === "umpire";
             });
        case "coach":
             return input.filter(function(player){
               return player.role === "coach";
             });
       default:
         return input;
     }
   }
 }
}
