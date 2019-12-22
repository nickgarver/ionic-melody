import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  sampleName = "New Money";
  sampleInfo = "128 bpm - G";
  sampleCreator = "dj corbett";
  sampleSplit = "50/50";
  sampleBMI = "1653580";
  sampleASCAP = "120498";

  sampleName2 = "Bubble Synth ";
  sampleInfo2 = "102 bpm - Db";
  sampleCreator2 = "internetboy";
  sampleSplit2 = "25/75";
  sampleBMI2 = "9734875";
  sampleASCAP2 = "803586";

  constructor() { }

  ngOnInit() {}

}
