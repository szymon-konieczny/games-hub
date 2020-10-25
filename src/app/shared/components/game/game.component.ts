import { Component, Input } from '@angular/core';

import { Game } from '@shared/interfaces';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent {
  @Input() public gameData: Game;
}
