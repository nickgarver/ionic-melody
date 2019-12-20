import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { CardComponent } from './card/card.component';

@NgModule({
  imports: [IonicModule],
  declarations: [CardComponent],
  exports: [CardComponent]
})
export class ComponentsModule{}
