import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

  handleSwipe(){
    console.log("swipe");
  }

  handlePan(ev){
    console.log(ev.center.x , ev.center.y);
  }

}
