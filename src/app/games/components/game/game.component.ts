import { Component, Input, NgModule, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

import { Game } from '@shared/interfaces';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  @Input() public gameData: Game;

  public thumbnailSrc: string;

  constructor() { }

  ngOnInit(): void {
    // this.thumbnail = this.gameData.thumbnail;
    this.thumbnailSrc = 'http://static.mrgcdn.com/mrgreen/image/fetch/fl_progressive,fl_lossy,q_90,c_lfill/https://casino.mrgreen.com/globalassets/campaigns/images/global/plug-n-play/2020-02-27---marcom-49048---lc-wager-get-evo---campaign-teaser-landscape---438-x-267.jpg';
  }

}
