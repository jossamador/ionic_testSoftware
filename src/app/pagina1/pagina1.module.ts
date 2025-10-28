import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pagina1PageRoutingModule } from './pagina1-routing.module';

import { Pagina1Page } from './pagina1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pagina1PageRoutingModule,
    Pagina1Page
  ],
  declarations: []
})
export class Pagina1PageModule {}
