import { Component, OnInit  } from '@angular/core';
import { Player } from '../player.model';
import { Router } from '@angular/router';
import { PlayerService } from '../player.service';
import {FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [PlayerService]
})

export class WelcomeComponent implements OnInit {
  players: FirebaseListObservable<any[]>
  currentRoute: string = this.router.url;
  filterBy: string = "allTeams"

  constructor(private router: Router, private playerService: PlayerService){}

ngOnInit() {
  this.players = this.playerService.getPlayers();
  if(this.currentRoute === "/chennai"){
    this.filterBy = "chennai";

  } else if (this.currentRoute === "/hyderabad") {
    this.filterBy = "hyderabad";
    console.log(this.currentRoute);
  } else if (this.currentRoute === "/mumbai") {
    this.filterBy = "mumbai";
  } else if (this.currentRoute === "/bangalore") {
    this.filterBy = "bangalore";
  } else {
    this.filterBy = "allTeams";
  }
}
}
