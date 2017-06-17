import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Player} from '../player.model';
import { PlayerService} from '../player.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-cricketclub',
  templateUrl: './cricketclub.component.html',
  styleUrls: ['./cricketclub.component.css'],
  providers: [PlayerService]
})

export class CricketclubComponent implements OnInit {
  players: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private playerService: PlayerService){}

  ngOnInit(){
    this.players = this.playerService.getPlayers();
    console.log(this.router.url);
  }

  goToDetailPage(clickedPlayer){
    this.router.navigate(['players', clickedPlayer.$key]);
  };

  filterBy: string = "coach"

  onChange(menuOption){
    this.filterBy = menuOption;
  }
}
