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


  constructor() { }

  ngOnInit() {}

}
