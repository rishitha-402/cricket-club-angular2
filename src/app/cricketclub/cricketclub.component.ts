import { Component} from '@angular/core';
import { Player} from '../player.model';

@Component({
  selector: 'app-cricketclub',
  templateUrl: './cricketclub.component.html',
  styleUrls: ['./cricketclub.component.css']
})
export class CricketclubComponent  {
players: Player[] = [
  new Player("Suresh Raina",30,"http://icc-corp-2013-live.s3.amazonaws.com/players/worldt20-2016/284/14.png","Left Hand","Bowler",1),
  new Player("MS Dhoni",35,"http://icc-corp-2013-live.s3.amazonaws.com/players/worldt20-2016/284/1.png","Right-handed","Captain", 2),
  new Player("Virat Kohli", 30,"http://icc-corp-2013-live.s3.amazonaws.com/players/worldt20-2016/284/164.png","Left- handed","Batsman",3),
  new Player("Yuvraj Singh",35,"http://imagespng.com/Data/DownloadLogo/Yuvraj-Singh.png","Left-handed","Couch",4),
];
}
