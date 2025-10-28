import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.page.html',
  styleUrls: ['./pagina1.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Pagina1Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
