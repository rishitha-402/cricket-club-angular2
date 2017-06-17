import { Injectable } from '@angular/core';
import { Player } from './player.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class PlayerService {
  players: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.players = database.list('players');
  }

  // get players list
  getPlayers(){
    return this.players;
  }

  // add new players
  addPlayer(newPlayer: Player){
    this.players.push(newPlayer);
  }

  // get players by id
  getPlayerById(playerId: string){
    return this.database.object('players/' + playerId);
  }

  // updating a player
  updatePlayer(localUpdatedPlayer){
    var playerEntryInFirebase = this.getPlayerById(localUpdatedPlayer.$key);
    playerEntryInFirebase.update({ name: localUpdatedPlayer.name,
      age: localUpdatedPlayer.age, image: localUpdatedPlayer.image,
      hand: localUpdatedPlayer.hand, role: localUpdatedPlayer.role, team: localUpdatedPlayer.team});
    }

    // deleting a player
    deletePlayer(localPlayerToDelete){
      var playerEntryInFirebase = this.getPlayerById(localPlayerToDelete.$key);
      playerEntryInFirebase.remove();
    }
  }
