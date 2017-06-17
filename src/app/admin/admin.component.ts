import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Player } from '../player.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [PlayerService]
})

export class AdminComponent implements OnInit {

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

  submitForm(name: string, age: number, image: string, hand: string, role: string, team: string){
    var newPlayer: Player = new Player(name, age, image, hand, role, team);
    this.playerService.addPlayer(newPlayer);
  }

}
