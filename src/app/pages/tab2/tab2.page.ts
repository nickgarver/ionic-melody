import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import {AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {

  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  signOut(){
    this.afAuth.auth.signOut().then(() => {
      location.reload();
    });
  }

}
