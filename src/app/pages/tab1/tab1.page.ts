import { Component, OnInit } from '@angular/core';
import {AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  signOut(){
    this.afAuth.auth.signOut().then(() => {
      location.reload();
    });
}

}
