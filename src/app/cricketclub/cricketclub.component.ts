import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Player} from '../player.model';
import { PlayerService} from '../player.service';
import { FirebaseListObservable } from 'angularfire2/database';
// import { RolePipe} from '../role.pipe';

@Component({
  selector: 'app-cricketclub',
  templateUrl: './cricketclub.component.html',
  styleUrls: ['./cricketclub.component.css'],
  providers: [PlayerService]
})

export class CricketclubComponent implements OnInit {
  players: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  filterByRole: string = 'allRoles';
  filterByTeam: string = "allTeams"

  constructor(private router: Router, private playerService: PlayerService){}

  ngOnInit(){
    this.players = this.playerService.getPlayers();
    //console.log(this.router.url);

    if(this.currentRoute === "/chennai"){
      this.filterByTeam = "chennai";
    } else if (this.currentRoute === "/hyderabad") {
      this.filterByTeam = "hyderabad";
    } else if (this.currentRoute === "/mumbai") {
      this.filterByTeam = "mumbai";
    } else if (this.currentRoute === "/bangalore") {
      this.filterByTeam = "bangalore";
    } else {
      this.filterByTeam = "allTeams";
    }
  }

  goToDetailPage(clickedPlayer){
    this.router.navigate(['players', clickedPlayer.$key]);
  };

  onChange(menuOption){
    this.filterByRole = menuOption;
  }
}
