import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Player} from '../player.model';
import { PlayerService} from '../player.service';

@Component({
  selector: 'app-cricketclub',
  templateUrl: './cricketclub.component.html',
  styleUrls: ['./cricketclub.component.css'],
  providers: [PlayerService]
})
export class CricketclubComponent implements OnInit {
  players: Player[];

  constructor(private router: Router, private playerService: PlayerService){}

  ngOnInit(){
    this.players = this.playerService.getPlayers();
  }

  goToDetailPage(clickedPlayer: Player){
    this.router.navigate(['players', clickedPlayer.id]);
  };
}
